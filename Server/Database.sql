CREATE DATABASE muff_db;

CREATE TABLE UserAcc(
    ua_username char(32) not null,
    ua_password varchar(32) not null,
    ua_name char(64) not null,
    ua_id decimal(999,0),
    ua_uniqueKey varchar(32) not null
);

CREATE TABLE UserInfo(
    ui_id decimal(999,0) not null,
    ui_uniqueKey varChar(32) not null,
    ui_name char(64) not null,
    ui_coinAmount decimal(5000,0) not null
);

CREATE TABLE transactionHistory(
    th_date date not null,
    th_uniqueKey varChar(32) not null,
    th_amount decimal(5000,0) not null
);



