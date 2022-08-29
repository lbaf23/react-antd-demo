# build
FROM node:16.13.0 AS build

COPY package.json .
COPY yarn.lock .

WORKDIR /app

RUN yarn config set registry https://registry.npmmirror.com

RUN yarn install
COPY . .

RUN yarn add react-scripts

RUN yarn build

# deploy
FROM nginx:1.21

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
