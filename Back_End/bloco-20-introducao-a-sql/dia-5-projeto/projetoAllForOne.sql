-- 1
SELECT product_name FROM northwind_projeto.products;

-- 2
SELECT * FROM northwind_projetoproducts;

-- 3
SELECT id FROM northwind_projeto.products;

-- 4
SELECT COUNT(product_name) FROM northwind_projeto.products;

-- 5 
SELECT * FROM northwind_projeto.products LIMIT 10 OFFSET 3;

-- 6
SELECT id, product_name FROM northwind_projeto.products order by product_name ASC;

-- 7
SELECT id FROM northwind_projeto.products order by id DESC LIMIT 5;

-- 8
SELECT
	5+6 AS 'A',
    'de' AS 'Trybe',
    2+8 AS 'eh';

-- 9
SELECT notes FROM northwind_projeto.purchase_orders WHERE notes IS NOT NULL; 

-- 10
SELECT * FROM northwind_projeto.purchase_orders
	WHERE created_by >= 3
    ORDER BY created_by DESC;

-- 11
SELECT notes 
FROM northwind_projeto.purchase_orders 
WHERE notes 
LIKE '%3%';

-- 12
SELECT submitted_date 
FROM northwind_projeto.purchase_orders 
WHERE DATE(submitted_date) = '2006-04-26';

-- 13
SELECT supplier_id 
FROM northwind_projeto.purchase_orders 
WHERE supplier_id = '1'
OR supplier_id = '3';

-- 14
SELECT supplier_id 
FROM northwind_projeto.purchase_orders 
WHERE supplier_id >= '1'
AND supplier_id <= '3';

-- 15
SELECT cast(TIME_FORMAT(submitted_date, '%H') as unsigned integer) 
AS submitted_hour 
FROM northwind.purchase_orders;

-- 16 
SELECT submitted_date 
FROM northwind_projeto.purchase_orders 
WHERE submitted_date BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59'
ORDER BY submitted_date ASC;

-- 17
SELECT id, supplier_id 
FROM northwind_projeto.purchase_orders 
WHERE supplier_id = '1' OR
supplier_id = '3' OR
supplier_id = '5' OR
supplier_id = '7';

-- 18
SELECT * FROM northwind_projeto.purchase_orders
WHERE supplier_id = '3' AND
status_id = '2';

-- 19
SELECT COUNT(employee_id) AS orders_count
FROM northwind_projeto.orders
where employee_id = '5' OR
employee_id = '6' AND
shipper_id = '2';

-- 20
INSERT INTO northwind_projeto.order_details(order_id, product_id, quantity, unit_price, discount, status_id, inventory_id ) 
VALUES 	(69,80,15.0000,15.0000,0,2,129);

-- 21 
INSERT INTO northwind_projeto.order_details(order_id, product_id, quantity, unit_price, discount, status_id, inventory_id ) 
VALUES
	(69,80,15.0000,15.0000,0,2,129),
    (69,80,15.0000,15.0000,0,2,129);
    
-- 22
UPDATE northwind_projeto.order_details 
SET discount = "15"
WHERE discount = "0";

-- 23
UPDATE northwind_projeto.order_details 
SET discount = "30"
WHERE unit_price < 10.0000 ;

-- 24
UPDATE northwind_projeto.order_details 
SET discount = "45"
WHERE unit_price > 10.0000 
AND (id >= 30 AND id <= 40);

-- 25
DELETE FROM northwind_projeto.order_details 
WHERE unit_price < 10.0000;

-- 26
DELETE FROM northwind_projeto.order_details 
WHERE unit_price > 10.0000;

-- 27
DELETE FROM northwind_projeto.order_details;
