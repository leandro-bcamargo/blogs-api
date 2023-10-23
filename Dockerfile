FROM node:16.14
RUN apt update && apt install lsof
RUN mkdir /app && chown node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node __tests__ __tests__
COPY --chown=node:node .trybe .trybe
COPY --chown=node:node src src
COPY --chown=node:node .eslintignore .
COPY --chown=node:node .eslintrc.json .
COPY --chown=node:node .sequelizerc .
COPY --chown=node:node jest.config.js .