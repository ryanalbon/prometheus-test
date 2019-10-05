FROM node:10-alpine
LABEL maintainer="Ryan Albon <ryanalbon@gmail.com>"

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN ["npm", "install", "--only=prod"]
COPY ./ ./

ENTRYPOINT ["/usr/local/bin/node"]
CMD ["/app/src/index.js"]
