FROM node:8.0.0-alpine
MAINTAINER Douglas Alves <douglas.expalves@gmail.com>

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .
