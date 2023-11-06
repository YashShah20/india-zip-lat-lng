FROM node:18

WORKDIR /usr/home/app

COPY package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]