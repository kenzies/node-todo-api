// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// *** object destructuring ***
// lets you pull out properties from an object
// creating variables, fantastic way to make new variables from obj properties

// var user = {name: 'andrew', age: 25};
// var {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB Server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {

	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));


	// });

	// db.collection('Users').insertOne({
	// 	name: 'Kenzie Sepler',
	// 	age: 23,
	// 	location: 'Port Townsend, WA'
	// }, (err, result) => {

	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

	// });

	db.close();

	// id: mongodb built for scaling, a randomly generated id is better for scaling
	// than an auto incremented one
	// first 4 bytes: time stamp
	// next 3 bytes: machine identifier
	// next 2 bytes: process id
	// next 3: 3 byte counter similar to SQL, starting with a random value
	//"585d5e95 4557ff 3629 241b74"
});