#PostgreSQL
PostgreSQL is a relational database server, in which you can store data your application uses.

#There are several common psql commands:
\?			Lists available help commands
\c my_app	Connects to database 'my_app'
\dt+		Lists tables
\d+	fruit	Describes table 'fruit'
\q			Quit

#If you want to create a table you use:

create table hats (
	name text,
	material text,
	height integer,
	brim boolean
);

#If you want to insert data in to a table:

insert into hats value ('sun hat', 'straw', 7, true);

insert into hats (name, material, height, brim) values ('top hat', 'buckram', 12, true);

insert into hats (name, material, height, brim) values ('cloche', 'felt', 6, false),
('chicken', 'bwuk bwuk bwuk', 12, false);

#To then select the data from the table:
select * from hats;
select * from hats where name = 'top hat';
select count(*) from hats;

#To delete data from the table:
delete from hats where name = 'chicken';

#If you want to modify the table structure:
alter table hats add column price integer;

#For an unique id per item
You add an column called id with value serial primary key

#You can add constraints to the table:
alter table hats add column user_id integer references users;

This makes sure that every value in user_id corresponds to an id in the table users

#You can chain queries in SQL:
select * from hats where user_id = (select (id) from users where email = 'thijstel@gmail.com');

#To read/write to postgres you need to use npm's pg package
npm install pg --save

#Then in your *.js file
var pg = require('pg');
var connectionString = "postgres://user:pass@localhost";

#To read from database:
pg.connect(connectionString, function (err, client, done) {
	client.query('select * from table', function (err, result) {
		console.log(result.rows);

		done();
		pg.end();
	});
});

#To write to database:
pg.connect(connectionString, function (err, client, done) {
	client.query('insert into hats values (\'chicken\', \'feathers\', 10, false)', function (err) {
		if(err) {
			throw err;
		}

		done();
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});
});
