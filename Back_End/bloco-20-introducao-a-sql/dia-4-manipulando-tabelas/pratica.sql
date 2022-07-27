-- 1 - Insira um novo funcionário na tabela sakila.staff ?

SELECT * FROM sakila.staff;

INSERT INTO sakila.staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Daniele', 'Bueno', 2, 'danni06@gmail.com', 1, 1, 'Dani', '1234');
    
    
-- 2 - Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.?
INSERT INTO sakila.staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Marcos', 'Bello', 3, 'marcos@gmail.com', 1, 1, 'Marck', '1234'),
    ('Zara', 'Bueno', 4, 'zara@gmail.com', 1, 1, 'Zarinha', '1234');
    
-- 3 - Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.?
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

-- 4 - Cadastre três categorias de uma vez só na tabela sakila.category.?
SELECT * FROM sakila.category;

INSERT INTO sakila.category
	(name)
VALUES
	('Dani Gosta'),
    ('Dani Gosta'),
    ('Dani Gosta');

-- 5 - Cadastre uma nova loja na tabela sakila.store.?

INSERT INTO sakila.store
	(manager_staff_id, address_id)
VALUES
	(3, 3);

-- 6 - Atualizando algo digitado errado na tabela.?

UPDATE sakila.staff
SET first_name = 'Zaroio'
WHERE first_name = 'Zara';


-- 7 - Atualizando dois campos de algo digitado errado na tabela.?

UPDATE sakila.staff
SET first_name = 'Zaroio', last_name = 'Bueno'
WHERE staff_id = 8;

-- Digitou algo errado? De boa, vamos dar um UPDATE.?
-- Rode o seguinte comando SET SQL_SAFE_UPDATES = 0; em uma janela de query dentro do MySQL Workbench sempre que abri-lo, para desabilitar essa funcionalidade antes de executar seus comandos UPDATE ou DELETE:.?

-- 8 - Atualize o primeiro nome de todas as pessoas da tabela sakila.actor, que possuem o primeiro nome "JULIA", para "JULES"..?

SELECT * FROM sakila.actor;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 9 - Altere a linha da tabela categoria onde o valor da coluna x é igual "Sci-fi" para "Science Fiction".?

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';


-- 10 - Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação "G", "PG" ou "PG-13" e um custo de substituição maior que $20..?

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;


-- Como assim, alguém te cadastrou sem você deixar? Vamos dar um DELETE nisso!.?


-- 1 - Exclua do banco de dados o ator com o nome de "KARL".?

-- Primeiro descubra os IDs relacionados ao nome.?
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2 - Exclua do banco de dados os atores com o nome de "MATTHEW".

-- Primeiro descubra os IDs relacionados ao nome.?
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = (8, 103, 181);

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';


-- 3 - Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

SELECT film_id
FROM sakila.film_text
WHERE description LIKE '%saga%';

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

-- 4 - Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.

TRUNCATE film_actor;

TRUNCATE film_category;








