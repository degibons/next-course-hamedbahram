#! /bin/sh

NOVICE="novice"
CANDIDATE="candidate"
RELEASE="release"

start=`date +%s`

docker build -t app:$NOVICE .

if docker image inspect "app:$CANDIDATE" >/dev/null 2>&1; then
    docker rmi app:$CANDIDATE
fi

if docker image inspect "app:$RELEASE" >/dev/null 2>&1; then
    docker image tag app:$RELEASE app:$CANDIDATE
    docker rmi app:$RELEASE
fi

docker image tag app:$NOVICE app:$RELEASE
docker rmi app:$NOVICE

npm run docker:down
npm run docker:up -- -d

end=`date +%s`
echo "Done in $((end-start)) sec."
