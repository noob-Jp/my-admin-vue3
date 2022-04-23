FROM nginx:latest
COPY zjp/docker/dist/ /usr/share/nginx/html/
COPY zjp/docker/default.conf /etc/nginx/conf.d/default.conf