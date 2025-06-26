FROM node:22.15 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM httpd:2.4
COPY --from=build /app/build/ /usr/local/apache2/htdocs/
