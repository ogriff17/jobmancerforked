DROP DATABASE IF EXISTS zzmb7cc7fazm5iny;
CREATE DATABASE zzmb7cc7fazm5iny;

USE zzmb7cc7fazm5iny;

CREATE TABLE users
(
    userName VARCHAR(20) not null,
    pass VARCHAR(100) not null,
    users_name VARCHAR(100) not null,
    job_title VARCHAR(100) not null,
    email VARCHAR(100) not null,
    phone VARCHAR(100) not null,
    country VARCHAR(100) not null,
    ustate VARCHAR(100),
    city VARCHAR(100) not null,
    zip INT(5) not null,
    network VARCHAR(100),
    net_username VARCHAR(100),
    siteurl VARCHAR(100)
    );

CREATE TABLE education
(
      institution VARCHAR(100) not null,
      field VARCHAR(100) not null,
      srtDate VARCHAR(100),
      gpa INT(4),
      endDate VARCHAR(100)
    );

CREATE TABLE certs
(
      title VARCHAR(100),
      date VARCHAR(100),
      awarder VARCHAR(100)
);

CREATE TABLE skills
(
      skillName VARCHAR(100),
      level VARCHAR(100),
      keywords VARCHAR(100)
);


CREATE TABLE extra
(
      org VARCHAR(100),
      pos VARCHAR(100),
      website VARCHAR(100),
      srtDate VARCHAR(100),
      endDate VARCHAR(100)
);
