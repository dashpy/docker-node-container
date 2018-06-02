# Directory:

- server.js
- package.json
- package-lock.json
- Dockerfile
- docker-compose.yml


# Description for node server
Basically it has a really simple node express server that runs on the port 5000
and set a comunication with a Redis DB. You can use this code with a container in docker


# Instructions for node server:
```sh
- redis-server (this will raise the redis db)
- npm start (this will raise the node server in the port 5000)
```

# Description for docker-compose
The container is set to use this image:
- federoman/node-container

Services:
- redis (Port 6379)
- visualizer (Port 8080)


# Instructions for docker-compose
```sh
- docker-compose up 
```

# Docker-machine
The yml file configuration is ready to use with docker-machine and use as a cluster with docker swarm.
