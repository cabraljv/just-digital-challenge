# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATHdocker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev

# install app dependencies
COPY package.json ./
RUN npm config set unsafe-perm true
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]