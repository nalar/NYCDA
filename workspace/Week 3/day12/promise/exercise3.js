/////
// Exercise 3
// Using Promise wrap the following postgreSQL query
// "select * from tablaname"
// 
// The promise should pass an array containing the rows
// that the query returns to the resolve function
// 
// Return the error to the reject function if an error
// occurs while querying the database.

var Promise = require('promise');
var pg = require('pg');

connectionString = "postgres://postgres:sergtsop@localhost:5432/postgres";

var queryPromise = new Promise(function(resolve, reject){
	pg.connect(connectionString, function (err, client, done){
		
		if(err){reject(err)};	
		
		client.query('select * from users', function (err, result){
		
			if(err){reject(err)};
		
			tableArray = result.rows;
		
			done();
			pg.end();
		
		resolve(tableArray)
		
		});
	});
});

queryPromise.then(console.log,console.log);