FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Copy both package.json AND package-lock.json
COPY package*.json ./

RUN npm install
# For production run npm install --only=production

# Bundle app source
COPY . .
