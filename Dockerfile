FROM node:18-alpine
ADD . /app
WORKDIR /app
RUN apk add --update-cache sqlite
RUN mkdir node_modules && chown node:node node_modules
USER node
CMD npm install
