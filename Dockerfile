# Use the official Node.js image with version 14.21.3 as the base image
FROM node:14.21.3

# Set the working directory inside the container
WORKDIR /opt/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
