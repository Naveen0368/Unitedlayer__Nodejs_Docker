# Use an official Node.js 14 image as a base
FROM node:8.9.3

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# set user to root
#USER root

# Install PM2
RUN npm install -g pm2@2.9.3

# Expose the port your app runs on
EXPOSE 9250

#RUN pm2 startup
ENV HOME=/app

# run in daemon mode
CMD ["pm2", "start", "server.js", "--name", "rdp-server", "--daemon"]


