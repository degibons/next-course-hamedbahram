ARG BASE=node:16.13.1-alpine

#------ target dependencies

# Install dependencies only when needed
FROM ${BASE} AS dependencies

RUN apk update \
	&& apk add --no-cache openssl curl libc6-compat \
	&& rm -rf /var/lib/apt/lists/* \
	&& rm -rf /var/cache/apk/*

RUN openssl version && curl --version
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma

RUN npm install --production=true --frozen-lockfile --ignore-scripts \
    && node-prune \
    && cp -R node_modules prod_node_modules \
    && npm install --production=false --prefer-offline \
    && rm -rf prisma \
    && npm cache clean

#------ target builder

# Rebuild the source code only when needed
FROM ${BASE} AS builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN npm run build && rm -rf node_modules

#------ target production

# Production image, copy all the files and run next
FROM ${BASE} AS production
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/content ./content
COPY --from=builder /app/emails ./emails
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/package.json ./package.json
COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/prisma ./prisma

USER node

EXPOSE 3001
ENV PORT 3001

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run" "start:prod"]
