FROM node:16-alpine

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

EXPOSE 8080

CMD [ "npm","start" ]