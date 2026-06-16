FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY db ./db
COPY routes ./routes
COPY app.js .

ENV MONGODB_URI=mongodb://mongodb:27017/pizzatime \
    REQUEST_ORIGIN=http://localhost:8000

RUN adduser -D user

USER user

CMD ["node", "app.js"]