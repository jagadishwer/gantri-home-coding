FROM node:18.17.1
RUN mkdir /app
WORKDIR /app
ADD . /app
RUN npm install
RUN chmod +x ./wait-for-it.sh
CMD ["bash",  "-c",  "./wait-for-it.sh --timeout=0 db:3306  && npm run start-dev"]
