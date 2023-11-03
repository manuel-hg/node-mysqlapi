CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    salary DECIMAL(10,2) NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;