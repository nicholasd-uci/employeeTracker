-- holds the code that designs the database. How our code behaves.

-- This line makes sure that we get rid of our db for TeamMembers who already have an db set-up.
DROP DATABASE IF EXISTS employee_db;

-- C&P from mySQL ee_db
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  manager_id INT UNSIGNED,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

