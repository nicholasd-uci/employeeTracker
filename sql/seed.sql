-- This file is for the sole purpose of determining the seeded data. Data that the DB already has for the time of execution. 

USE employee_db;

-- Do we insert the values?
-- Is this correct snytax? 
INSERT INTO department (name)
-- VALUES (*)
VALUES  ('Finance'),
        ('Human Resources'),
        ('IT'),
        ('Marketing'),
        ('Operations Mtg');

INSERT INTO role (title, salary, deparment_id)
VALUES  ('Account Manager', 44000, 1);
        ('Senior Accountant', 100000, 1),
        ('Jr. HR Director', 40000, 2),
        ('Director of HR', 80000, 2);
        ('Full Stack Developer', 133000, 3);
        ('Marketing Team', 46000, 4),
        ('Director of Marketing', 90000, 4),
        ('Director of Operation', 120000, 5;

-- Need to make sure to include more EE
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('John', 'Doe', 2, NULL),
        ('Jane', 'Doe', 1, 1),
        ('Jack', 'Doe', 4, NULL),
        ('Mike', 'Doe', 3, 3);
