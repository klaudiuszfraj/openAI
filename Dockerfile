FROM node:16.19.0-alpine as development

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM node:16.19.0-alpine as production

ARG NODE_ENV=poduction
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=poduction
COPY --from=development /app/dist ./dist

CMD ["node", "dist/app.js"]