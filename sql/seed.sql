-- This file is for the sole purpose of determining the seeded data. Data that the DB already has for the time of execution. 

USE ee_db;

-- Do we insert the values?
-- Is this correct snytax? 
INSERT INTO department (name)
-- VALUES (*)
VALUES  ('Client Services'), 
        ('Finance'),
        ('HR'),
        ('IT'),
        ('Marketing'),
        ('Operations Mtg');

