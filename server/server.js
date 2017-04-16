var express = require('express');
// parses body as json
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
var {Todo} = require ('./models/todo');
var {User} = require ('./models/user');

var app = express();

// express middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

// GET /todos/123423423

app.listen(3000, () => {
	console.log('Started on port 3000');
});