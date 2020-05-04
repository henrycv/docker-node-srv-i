FROM node:14.1.0-alpine3.10

RUN mkdir -p /home/node/node-srv-i/node_modules

WORKDIR /home/node/node-srv-i

COPY packag*.json ./

RUN chown -R node:node /home/node/node-srv-i

USER node

RUN npm install

COPY --chown=node:node . .

## Info: project files list 
RUN pwd
RUN ls -l
RUN node -v
RUN npm -v 

EXPOSE 8080

CMD ["node", "index.js"]