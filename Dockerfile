FROM node:18

RUN     mkdir /app
WORKDIR /app
ADD     astro.config.mjs package.json package-lock.json /app/
ADD     api /app/api
ADD     src /app/src
RUN     npm ci
RUN     npm run build

CMD     npm start
