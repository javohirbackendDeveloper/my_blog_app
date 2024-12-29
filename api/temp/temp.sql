create database my_blog;
\c my_blog;

drop table if exists users;
create table users (
  id serial primary key,
  username varchar(100) not null,
  email varchar(200) not null,
  password varchar(250) not null,
  img varchar(255) 
);


drop table if exists posts;
create table posts (
  id serial primary key,
  title varchar(100) not null,
  descr text  not null,
  img varchar(250) ,
  cat varchar ,
 
  usersId integer,
  constraint fk_user foreign key(usersId) references users(id) on delete cascade on update cascade
);


insert into users(username , email , password) values('jochdg' , 'skjdh@gmail.com' , 'absthryet')
