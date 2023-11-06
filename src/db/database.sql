CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    salary DECIMAL(10,2) NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee VALUES(1, 'Joe', 1001),(2, 'Joe2', 1002);