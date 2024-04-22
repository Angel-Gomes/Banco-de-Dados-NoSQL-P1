create database Prova;
use prova;
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(10) NOT NULL,
    produto VARCHAR(10) NOT NULL,
    preco FLOAT
);

insert into produtos (nome, produto, preco)
values
('mochila', 'produto 1', 100),
('camisa', 'produto 2', 200),
('bermuda', 'produto 3', 80),
('sapato', 'produto 4', 350),
('boné', 'produto 5', 70),
('garrafa', 'produto 6', 45);
