ARG BASE=node:22-alpine

#------ target dependencies

# Install dependencies only when needed
FROM ${BASE} AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma

# RUN apk update
# RUN apk add --no-cache openssl curl libc6-compat
# RUN rm -rf /var/lib/apt/lists/*
# RUN rm -rf /var/cache/apk/*

# RUN curl -sf https://gobinaries.com/tj/node-prune | sh

RUN npm ci --omit=dev
# RUN node-prune
RUN mv node_modules prod_node_modules
RUN npm ci
RUN rm -rf prisma

#------ target builder

# Rebuild the source code only when needed
FROM ${BASE} AS builder

WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN npm run build
RUN rm -rf node_modules

#------ target production

# Production image, copy all the files and run next
FROM ${BASE} AS production

WORKDIR /app
EXPOSE 3000

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
CMD npm run start:prod
