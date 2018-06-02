FROM node:latest
RUN mkdir -p /usr/src/app
RUN mkdir /usr/src/app/data
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 5000
CMD [ "node", "server.js"]
