FROM node:14-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Default node app dir
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy source cide
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]