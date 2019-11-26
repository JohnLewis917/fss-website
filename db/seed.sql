create table member_list (
id serial primary key,
member_rank varchar(6),
first_name varchar(50),
last_name varchar(50),
email varchar(100),
paid boolean,
amount int,
isAdmin boolean
)

create table events_list (
id serial primary key,
date varchar(10),
event varchar(150),
description varchar
)

create table officer_list(
member_rank varchar(6),
first_name varchar(50),
last_name varchar(50),
image text
)