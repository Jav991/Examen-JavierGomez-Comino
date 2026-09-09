FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN nmp install
COPY app.js .
EXPOSE 3000
CMD ["npm", "start"]