////''
// Postgres Join Tables
// 
// If you want to connect tables to each other you have
// to join them in the database. Per example: your app-
// lication connects patients and doctors where every
// doctor has multiple patiens and the other way around.
//
// The doctor and patient are connected through this
// magical thing called appointments. So the appointment
// table would be something like:
// 
// doctor_id	|	patient_id
// 1			|	1
// 1			|	2
// 2			|	3
// 
// Here doctor 1 has two appointments: one with patient 1
// and the other with patient 2. Doctor 2 only has an app-
// ointment with patient 3.
// 
/////
// Exercise: dataset
// Think of a dataset that would require a join table to
// connect several columns.
// 
// Dataset for a webshop where you have product_id,
// customer_id and order_id. In which each order is
// linked to a customer and a product id.
// 
Make the tables and joins:

create table webshopusers (
	id serial primary key,
	name text
);

create table webshopproducts (
	id serial primary key,
	name text
);

create table orders (
	id serial primary key,
	description text
);

alter table orders add column user_id integer references webshopusers;
alter table orders add column product_id integer references webshopproducts;

insert into webshopusers (name) values ('Thijs');
insert into webshopusers (name) values ('Jon');
insert into webshopusers (name) values ('Lloyd');

insert into webshopproducts (name) values ('HTML Beer');
insert into webshopproducts (name) values ('jQuery Beer');
insert into webshopproducts (name) values ('JSON Beer');

insert into orders (description, user_id, product_id) values ('JSON Beer order',1,3);