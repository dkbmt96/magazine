FROM node:16-alpine AS builder

RUN mkdir -p /opt

WORKDIR /opt
COPY package.json yarn.lock ./
RUN yarn install

COPY apps/web/ /opt/web
RUN cd web && yarn

COPY .env
RUN yarn build

# Production

FROM nginx:1.14-alpine

COPY --from=builder /opt/web/dist /usr/share/nginx/html
COPY --from=builder /opt/web/default.conf /etc/nginx/conf.d

EXPOSE 8901
CMD ["nginx", "-g", "daemon off;"]
