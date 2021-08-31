# syntax=docker/dockerfile:1
FROM node:14.16

WORKDIR /webapp

COPY . /webapp

RUN cd /webapp \ && npm install -f

CMD ["yarn", "start"]
