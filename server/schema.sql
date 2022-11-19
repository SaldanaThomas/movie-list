DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  year INT(4),
  runTime INT(3),
  metaScore INT(2),
  imdbRating INT(2),
  watched BOOLEAN,
  details BOOLEAN,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/