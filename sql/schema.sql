-- holds the code that designs the database. How our code behaves.

-- This line makes sure that we get rid of our db for TeamMembers who already have an db set-up.
DROP DATABASE IF EXISTS ee_db;

-- C&P from mySQL ee_db
CREATE DATABASE ee_db;

USE ee_db;
CREATE TABLE department (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(2) NOT NULL,
    deparment_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);