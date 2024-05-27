FROM node:lts-alpine3.20
WORKDIR /movie-app

# Installing dependencies
COPY ./package*.json /movie-app

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]