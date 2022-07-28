# from https://hub.docker.com/_/node
FROM node:16-alpine

WORKDIR /usr/src/roxa

COPY package*.json ./

RUN npm install --only=production

COPY ./dist ./dist

CMD ["npm", "run", "serve"]