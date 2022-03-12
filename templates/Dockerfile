# syntax=docker/dockerfile:1

ARG FRONTEND_IMAGE=palvelinkauppa-frontend-image:latest
ARG NODE_IMAGE=node:14

FROM $NODE_IMAGE as node-image

FROM $FRONTEND_IMAGE as frontend-image

FROM node-image
ENV LANG=en_US.utf8
ENV BACKEND_LOG_LEVEL=DEBUG
ENV PORT='3000'
ENV FRONTEND_DOCROOT_DIR='/app/docroot'

WORKDIR /app

COPY ./package*.json ./
RUN npm ci --silent --also=dev
COPY --from=frontend-image /app/build /app/docroot
COPY tsconfig.json ./tsconfig.json
COPY rollup.config.js ./rollup.config.js
COPY babel.config.json ./babel.config.json
COPY src ./src
RUN npm run build
CMD node /app/dist/palvelinkauppa-ssr-server.js /app/docroot
