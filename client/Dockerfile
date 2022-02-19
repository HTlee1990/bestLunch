FROM node:14-alpine3.14
ENV NODE_VERSION 14.19.0
WORKDIR /app
COPY package.json package-lock.json ./
#npm install은 최신버전으로 새로 설치하게 됨. 
#내가 설치한 버전과 다른 버전이 install 될 수 있음.
#ci 를 이용하면, lock버전에 있는, 내가 개발할때 사용한 버전 그대로를 install 하게 할 수 있다. 
RUN npm ci
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "serve"]