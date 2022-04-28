## INSTAGRAM CLONE USING MYSQL REACT NODEJS

## Features

- User Authentication
- Flash messages for incorrect username, password during login
- Flash messages for not password matching
- Can't acces home, profile, comments section without authentication
- share photos with friends
- Follow users
- Invite more users
- like posts
- comment on posts
- Username avatar
- Profile details on clicking profile picture.
- Chat with friends
- See follower list
- See following list
- View photos seperately
- See List of liked users

---

## Technology

- React - building user interface
- Express - fast node.js network app framework
- Context API - State management
- MySQL - Database
- Multer - uploading files
- Cloudinary - uploading files(Heroku does not store your data)

---

## Installation

It requires [Node.js](https://nodejs.org/) , [MYSQL](https://www.mysql.com/products/workbench/) and set connection details to run.

## Frontend

- replace the server url with your server url
- proxy under package.json to http://localhost:5000/

```javascript
cd client
npm i
npm start
```

## Backend

- node index.js

```javascript
npm i
cd server
nodemon index.js
```

Open browser and goto http://localhost:3000/

---

# Screenshorts

#### Login Page

---

<img src="/Screenshorts/login.png">
