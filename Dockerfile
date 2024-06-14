FROM node:18-alpine

WORKDIR /app

COPY ./package.json .
COPY ./.npmrc .
COPY .env .

ENV $(cat .env | xargs)

RUN cat .env


ENV TZ=America/Sao_Paulo

RUN ln -snf /usr/share/zoneinfo/America/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN yarn
COPY . .

ENV GENERATE_SOURCEMAP=false

EXPOSE 3000

CMD yarn build && yarn start:prod
