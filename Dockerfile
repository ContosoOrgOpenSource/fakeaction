# Use an official Node runtime as the base image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your action's code to the working directory
COPY . .

# Run index.js when the container launches
ENTRYPOINT ["node", "/app/index.js"]