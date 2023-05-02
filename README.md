# Notes API

A simple backend API that allows users create, read, update and delete their notes. 

Built following the [Uptick Backend Assessment Prompt](./uptickBackendAssessment.pdf)



### Technologies

<div align="center">

  <a href="">![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)</a>
  <a href="">![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)</a>
  <a href="">![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)</a>
  
  
</div>
<div align="center">

  <a href="">![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)</a>
  <a href="">![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)</a>

</div>


### Installation
First, you need to install the dependencies.
```bash
$ npm i 
```
secondly, you need to create a `.env` file and copy the `.env.example` file to it.
```bash
$ cp .env.example .env 
```
Finally, you need to run the server.
```bash
$ npm run server
```


### Base URL
https://uptick-backend-assessment.onrender.com

### Usage


#### Registration

* Route: /api/user/register
* Method: POST
* Body:
```java
{
  name: Your name here,
  email: yourEmail@gmail.com,
  password: yourPassword
}
```

```java
* Response:
  * 201: success || Created
  * 400: error || Bad Request
  * 500: error || Server Error
```

#### Login
* Route: /api/user/login
* Method: POST
* Body: 
```java
{
  email: yourEmail@gmail.com,
  password: yourPassword
}

```
* Response
```java
  200: success
  400: error || Bad Request
  500: error || Server Error
```

#### Get User Details
* Route: /api/user/me
* Method: GET (Authentication required to access route)
* Authorization: Bearer *token*
* Response
```java
  200: success
  400: error || Bad Request
  500: error || Server Error
```

#### Create New Note
* Route: /api/notes
* Method: POST (Authentication required to access route)
* Authorization: Bearer *token*
* Body: 
```java
{
  title: notes title,
  body: notes content
}

```
* Response status Codes: 
```java
  201: success || Created
  401: error || Unauthorized
  400: error || Bad Request
  500: error || Server Error
```

#### Get a Note
* Route: /api/notes/:id
* Method: GET (Authentication required to access route)
* Authorization: Bearer *token*
* Response
```java
  200: success 
  401: error || Unauthorized
  500: error || Server Error
```

#### Get all Notes
* Route: /api/notes
* Method: GET (Authentication required to access route)
* Authorization: Bearer *token*
* Response

```java
  200: success
  401: error || Unauthorized
  500: error || Server Error
```

#### Update a Note
* Route: /api/notes/:id
* Method: PUT (Authentication required to access route)
* Authorization: Bearer *token*
* Body: 
```java
  {
    title: notes title,
    body: notes content
  }
```
* Response
```java
  200: success 
  401: error || Unauthorized
  500: error || Server Error
```

#### Delete a Note
* Route: /api/notes/:id
* Method: DELETE (Authentication required to access route)
* Authorization: Bearer *token*
* Response
```java
  200: success 
  401: error || Unauthorized
  500: error || Server Error
```

#### Delete all Notes
* Route: /api/notes
* Method: DELETE (Authentication required to access route)
* Authorization: Bearer *token*
* Response
```java
  200: success 
  401: error || Unauthorized
  500: error || Server Error
```
