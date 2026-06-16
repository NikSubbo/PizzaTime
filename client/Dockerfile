FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    REACT_APP_BACKEND_URL=http://localhost:8000/api npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm i -g serve && adduser -D user

USER user

CMD ["serve", "-s", "-l", "3000", "build"]