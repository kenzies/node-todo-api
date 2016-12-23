// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB Server');

	// ** findOneAndUpdate **

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('585d71c75a6a60f2142b8d49')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// })
	// .then((result) => {
	// 	console.log(result);
	// });

	// db.close();

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('585c35f5145ed932edb5f73e')
	}, {
		$set: {
			name: 'Kenzie Sepler'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	})
	.then((result) => {
		console.log(result);
	});
});
