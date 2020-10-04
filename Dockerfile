FROM nginx:1.17.1-alpine
COPY default.conf /etc/nginx/nginx.conf
COPY /dist/UI-InfiniteScroll /usr/share/nginx/html
EXPOSE 80