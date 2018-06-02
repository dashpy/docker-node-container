FROM node:latest

# Create the follow directory in the container
RUN mkdir -p /usr/src/app/data

# Set the work directory
WORKDIR /app

# Copy all the files in the current directory to the container folder
ADD . /app

# Run npm install in the container
RUN npm install

# expose the redis port
EXPOSE 6379


# Run the node server in port 5000
EXPOSE 5000

# Start the server
CMD [ "node", "server.js"]
