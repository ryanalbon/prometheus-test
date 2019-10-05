FROM node:10-alpine
LABEL maintainer="Ryan Albon <ryanalbon@gmail.com>"
EXPOSE 8080

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN ["/usr/local/bin/npm", "install", "--only=prod"]
COPY ./ ./

ENTRYPOINT ["/usr/local/bin/node"]
CMD ["/app/bin/www"]
