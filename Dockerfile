FROM node:slim
MAINTAINER sin_tanaka

RUN npm install -g vue-cli@2.4.0

ENV HOME=/home/app
WORKDIR $HOME/srv
