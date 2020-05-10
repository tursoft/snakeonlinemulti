FROM node:10.15.2-alpine AS build
WORKDIR /usr/app
COPY *.* ./
RUN npm install
COPY ./src ./src
RUN npm run build

FROM abhin4v/hastatic:latest
COPY --from=build /usr/app/src /opt/website
WORKDIR /opt/website
CMD ["/usr/bin/hastatic"]