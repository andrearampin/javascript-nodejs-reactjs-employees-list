
// Import express:
var express = require('express');

// Init express app:
var app = express();

// In order to load the initial users form the json file.
// Load fylesystem library:
var fs = require('fs');

// Load json parser for HTTP requests:
var bodyParser = require('body-parser')

// Config app so to automatically parse the body of the HTTP request:
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Load users list form a json string:
var __data = [];
fs.readFile( __dirname + '/' + 'data.json', 'utf8', function (err, data) {
   global.__data = JSON.parse(data);
});


/**
  * Format users list.
  * @return array users list where every user has a new property which represents its array id.
  */
var formatList = function() {
    var list = [];
    for (var i = global.__data.length - 1; i >= 0; i--) {
        list[i] = {
            id: i,
            name: global.__data[i].name,
            profession: global.__data[i].profession
        }
    }
    return list;
}


/**
  * Return the list of users (id, name, profession) currently recorded in the system.
  * @return string list of users as a json string.
  */
app.get('/users', function (req, res) {
    res.end(JSON.stringify(formatList()));
})


/**
  * Add a new user to the list. The endpoint expects an application/json request with the new user definition
  * as body. Example: {"name" : "Rob","profession" : "Dev/Ops Engineer"}
  * @return string list of users as a json string.
  */
app.post('/users', function (req, res) {
    if(typeof req.body !== 'undefined') {
        global.__data.push(req.body);
    }
    res.end(JSON.stringify(formatList()));
})


/**
  * Update a user. The endpoint expects an application/json request with the new user definition
  * as body. Example: {"name" : "Rob","profession" : "Dev/Ops Engineer"}
  * @param integer user's id.
  * @return string list of users as a json string.
  */
app.put('/users/:id', function (req, res) {
    var id = req.params.id;
    var updates = req.body;
    if(global.__data[id] !== undefined) {
        global.__data[id].name = updates.name;
        global.__data[id].profession = updates.profession;
    }
    res.end(JSON.stringify(formatList()));
})


/**
  * Delete a user.
  * @param integer user's id.
  * @return string list of users as a json string.
  */
app.delete('/users/:id', function (req, res) {
    var id = req.params.id;
    if(global.__data[id] !== undefined) {
        global.__data.splice(id, 1);
    }
    res.end(JSON.stringify(formatList()));
})


// Run the server (http://127.0.0.1:8888):
var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Server listening')
})