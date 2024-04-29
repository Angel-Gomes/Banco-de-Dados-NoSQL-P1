create database Login;
use Login;
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(30) NOT NULL,
    senha VARCHAR(8) NOT NULL
);

insert into produtos (login, senha)
values
('angelik.gomes27@gmail.com', 'Angel123'),
('a1b2c3@gmail.com', '1A2B3C'),
('abc.def@gmail.com', 'abc123');
