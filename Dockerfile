FROM docker-registry.corp.tass.ru/core/core-tools/docker-base-images/node:16-buster-slim as prep

WORKDIR /opt/app
COPY .npmrc /opt/app/.npmrc
COPY package.json /opt/app/package.json
COPY package-lock.json /opt/app/package-lock.json
RUN npm ci

FROM prep as build 

COPY . /opt/app/.
RUN cat .env
RUN npm run build

FROM "docker-registry.corp.tass.ru/core/core-tools/docker-base-images/nginx"
COPY --from=build /opt/app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/app/build /usr/share/nginx/html
