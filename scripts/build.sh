#!/bin/bash

# build frontend
cd frontend
rm -rf build/
yarn
yarn build
cd ..

# build container and push to dockerhub
docker build -t ashwinath/personal-website-4 $* .
docker login -u="ashwinath" -p="$DOCKER_PASSWORD"
docker push ashwinath/personal-website-4:latest

ssh -o "StrictHostKeyChecking no" travis@ashwinchat.com -t "docker pull ashwinath/personal-website-4; docker stop website-beta; docker rm website-beta; docker run --name website-beta -d -v /var/log/website-beta:/var/log/website-beta -p 23000:8080 ashwinath/personal-website-4; docker image prune -f"
