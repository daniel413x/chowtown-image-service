FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 5003

CMD ["node", "./dist/index.js"]