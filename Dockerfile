FROM node:14

WORKDIR /pj
COPY . .

RUN npm install

EXPOSE 5000
CMD ["npm","run","dev:server"]
