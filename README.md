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
$ docker-compose up app
```


**Option 2:** Without Docker  and Docker Compose

*step1*: update .env file with appropriate value to connect to mysql Database

*step2*: Import the Tate collection csv to Mysql
```
$ npm run load-Tate-collection
```

*step3*: Start the Application
```
$ npm run start-dev
```

#curl Commands to test

**1.  create user**
```
curl --location --request POST 'http://localhost:3000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "jb",
    "age": 37,
    "location": "fremont"
}'
```

**2. Get all Users**
```
curl --location --request GET 'http://localhost:3000/api/users'
```

**3. Get all Arts**
```
curl --location --request GET 'http://localhost:3000/api/art'
```

**4.1. Get a Comment Art** with name only
```
curl --location --request POST 'http://localhost:3000/api/art/414/comments' \
--header 'Content-Type: application/json' \
--data-raw '{
   "name": "jb",
   "content": "first comment 15"
}'
```

**4.2. Get a Comment Art** with User id only
```
curl --location --request POST 'http://localhost:3000/api/art/1/comments' \
--header 'Content-Type: application/json' \
--data-raw '{
   "user_id": 1,
   "content": "first comment 15"
}'
```


**5. Get a individual Art** 
```
curl --location --request GET 'http://localhost:3000/api/art/1'
```
