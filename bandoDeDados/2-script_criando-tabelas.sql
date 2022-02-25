-- selecionando o bando de dados 'db_magalu'
use db_magalu;

-- criando as respectivas tabelas com PK e FK
CREATE TABLE `tb_product` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(5 , 2 ) NOT NULL
);
CREATE TABLE `tb_category`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `tb_product_category`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `productId` INT NOT NULL,
    `categoryId` INT NOT NULL,
    FOREIGN KEY (`productId`) references tb_product(id),
    FOREIGN KEY (`categoryId`) references tb_category(id)
);
