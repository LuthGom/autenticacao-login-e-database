-- SCRIPT DE INSERT para tb_product, tb_category e tb_product_category, respectivamente.
INSERT INTO tb_product (
`name`,
`price`
) VALUES ("product_A", 90.55),
("product_B", 150.00),
("product_C", 105.10);

INSERT INTO tb_category (
`name`
) VALUES 
("category_A"),
("category_B"),
("category_C");

INSERT INTO tb_product_category (
	productId,
    categoryId
) VALUES(1,1),
(2,2),
(3,3);

