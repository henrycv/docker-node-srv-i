FROM node:14.1.0-alpine3.10

# App directory path
ARG APP_DIR_DOCKER=$APP_DIR_DOCKER

RUN mkdir -p $APP_DIR_DOCKER/node_modules

WORKDIR $APP_DIR_DOCKER

COPY packag*.json ./

RUN chown -R node:node $APP_DIR_DOCKER

USER node

RUN npm install

COPY --chown=node:node . .

## Info: project files list 
RUN pwd
RUN ls -l
RUN ls -l $APP_DIR_DOCKER/docker/node-14/
RUN node -v
RUN npm -v 

EXPOSE 8080

CMD ["node", "index.js"]