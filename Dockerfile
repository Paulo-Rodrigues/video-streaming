FROM node:alpine

RUN apk add --no-cache bash

WORKDIR /video-streaming

ENV PATH /video-streaming/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .

RUN npm install yarn && yarn install

COPY . .

