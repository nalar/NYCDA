/////
// Exercise 4
// Using Promise wrap the following postgreSQL query
// "select * from tablaname"
// 
// The promise should pass an array containing the rows
// that the query returns to the resolve function
// 
// Return the error to the reject function if an error
// occurs while querying the database.
// 
// Now make a function that takes in one parameter, the
// table name and that creates a promise which contains
// that table name in the query

var Promise = require('promise');
var pg = require('pg');

var connectionString = 'postgres://postgres:sergtsop@localhost:5432/postgres';
var targetTable = 'users';

function makeQueryPromise(targetTable) {

	queryPromise = new Promise(function(resolve, reject) {
		pg.connect(connectionString, function(err, client, done) {

			if (err) {
				reject(err)
			};

			client.query('select * from ' + targetTable, function(err, result) {

				if (err) {
					reject(err)
				};

				tableArray = result.rows;

				done();
				pg.end();

				resolve(tableArray)

			});
		});
	});
	return (queryPromise);
};

getTargetTable = makeQueryPromise(targetTable);
getTargetTable.then(console.log, console.log);