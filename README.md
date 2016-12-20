# NodeJs and React employees listThis 

This repository contains an example of a [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) application built with [NodeJS](https://nodejs.org/en/) as well as its web interface using [ReactJS](https://facebook.github.io/react/).

The purpose of this project is to illustrate the functionalities of NodeJs as a web server and ReactJS as a renderer.

The code in this project is not made to be run as a production application however, it can be used and expanded to make it suitable for it.

## Set up

```
$ git clone git@github.com:andrearampin/javascript-nodejs-reactjs-employees-list.git
$ cd javascript-nodejs-reactjs-employees-list/
```

## Set up NodeJS environment

Open your terminal and run the following commands so to install the dependencies:

```
$ cd nodejs
$ npm install
```

and to run the server:

```
$ node server.js
```

by default this server will listen on the port 8888 therefore it will be accessible at [http://120.0.0.1:8888/users](http://120.0.0.1:8888/users).

## Endpoints

### /users (GET)
Display the list of users:

```$ curl http://127.0.0.1:8888/users```

### /users (POST)
Add a new user:

```$ curl -H "Content-Type: application/json" -X POST -d '{"name" : "TestUser","profession" : "Designer"}' http://localhost:8888/users
```

### /users (PUT)
Update user with id 1:

```$ curl -H "Content-Type: application/json" -X PUT -d '{"name" : "New Name","profession" : "Designer"}' http://localhost:8888/users/1
```

### /users (DELETE)
Delete user with id 1:

```$ curl -X "DELETE" http://127.0.0.1:8888/users/1```


## Set up ReactJS environment

Open another window for your terminal and run the following commands so to install the dependencies:

```
$ cd react
$ npm install
```

and to run the server:

```
$ npm start
```

automatically the react application will be opened at the address [http://localhost:3000/](http://localhost:3000/) and start interfacing with the NodeJS server as described in ```App.js``` at line **19**, **37** and **57**.