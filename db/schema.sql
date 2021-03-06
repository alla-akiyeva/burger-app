-- Create the burgers_db.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;
-- Create a burgers table with these fields:
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.