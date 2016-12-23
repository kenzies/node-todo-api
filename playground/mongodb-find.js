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

	// find() returns a MongoDB curser- a pointer to 
	// where the documents are

	// db.collection('Todos').find({
	// 	_id: new ObjectID('585d647a5a6a60f2142b8d44')
	// }).toArray().then((docs) => {
	// 	console.log('Todos:');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({
		name: 'Kenzie Sepler'
	}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to access collection');
	});


	// db.close();
});
