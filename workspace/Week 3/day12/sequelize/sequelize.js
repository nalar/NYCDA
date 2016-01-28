/////
// Sequalize is an ORM (object-relational mapping) module
// that let's you easily acces and manipulate your data-
// base without having to write SQL queries. It's promise
// based, making it easy to work with.
// 
// Read from, write to and modify PostgreSQL tables from
// javascript
//
// To create a sequelize model use Model.create()
//

/////
// Example 1 Model.create()
User.create({
	email: 'bloop@bleep.com',
	username: 'bloop_bloop'
});
//	Will send the following query:
//  INSERT INTO "users" ("id", "email", "username")
// 	VALUES (DEFAULT, 'bloop@bleep.com', 'bloop_bloop') RETURNING *;

/////
// Example 2 Model.findAll()
User.findAll().then(function(rows) {
	for(var i = 0; i < rows.length; i++) {
		var columnData = rows[i].datavalues;
		var email = columnData.email;
		var username = columnData.username;
	}
});
// Will send the following query:
// SELECT "id", "email", "username" FROM "users" AS "user";

/////
// Example 3 Model.findById()
User.findById(id).then(function (row) {
	var email = row.dataValues.email;
	var username = row.dataValues.username;
});
// Will send the following query:
// SELECT "id", "email", "username" FROM "users" AS "user" WHERE "user"."id" = id;

/////
// Exercise 1
// Compare your ORM-Lite assignment to sequelize
// 
// Advantages of ormlite over sequelize
// - Smaller so might be more efficient
// - Optimized for postgres
// 
// Disadvantages of ormlite
// - Limited functionality
// - No safety checks
// - Keeps client connected constantly
// 
// Advantages of sequelize over ormlite
// - Works with multiple database solutions
// - More functionality
// - Promise based
// - Larger than ormlite
// 
// What has changed if we take sequelize as a more
// advanced manifestation of ormlite?
// - More functionality added
// - Promises added