
FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=7777

EXPOSE 7777

CMD [ "npm", "run", "dev" ]

