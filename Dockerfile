FROM node:12.13.1-alpine AS builder
COPY . ./chatbot
WORKDIR /chatbot
RUN npm install
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /chatbot/dist/chatbot/ /usr/share/nginx/html