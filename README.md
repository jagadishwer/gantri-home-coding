# Gantri Home Coding
**Implemention stack:**

- Node:18.17.1
- Express:4.18.2
- Typescript: 5.2.2
- Mysql: 8.1.0
- Docker: 20.10.8
- Docker-compose: 1.29.2
- Postman to test apis.

****How to Run Application:****

**Option 1:**  Using Docker and Docker Compose

*step1*: Build docker image
```
$ docker-compose build
```
*step2*: Import the Tate collection csv to Mysql
```
$ docker-compose up load-Tate-collection
```
Note:  Ignore the error message after  "Successfully loaded records" Message. Intentionally breaking  loading process as it is large set and take lot of time.

*step3*: Start the Application
```
$ docker-compose up
```



**Step 2:** Without Docker  and Docker Compose

*step1*: update .env file with appropriate value to connect to mysql Database

*step2*: Import the Tate collection csv to Mysql
```
$ npm run load-Tate-collection
```

*step3*: Start the Application
```
$ npm run start-dev
```
