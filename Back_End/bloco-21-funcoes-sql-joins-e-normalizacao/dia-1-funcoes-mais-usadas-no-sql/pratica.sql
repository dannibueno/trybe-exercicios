-- RETORNA TDS EM MAIUCULAS
SELECT UCASE(title) FROM sakila.film LIMIT 10;

-- RETORNA TDS EM MINUSCULAS
SELECT LCASE(title) FROM sakila.film LIMIT 10;

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;

-- Retorna a parte da esquerda de uma string de acordo com o número de caracteres especificado
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;

-- Retorna a parte da direita de uma string de acordo com o número de caracteres especificado
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;

-- Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

--  PARA FIXAR --------------------------------------------------------------

-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT CHAR_LENGTH('Uma frase qualquer');

-- Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');


-- IF CASE -------------------------------------
-- SELECT IF (CONDICAO, VERDADEIRO, FALSO);

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;


-- 1 - Usando o IF na tabela sakila.film, exiba o id do filme, 
-- o título e uma coluna extra chamada 'conheço o filme?', 
-- em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. 
-- Caso seja, exiba "Já assisti a esse filme". 
-- Caso contrário, exiba "Não conheço o filme". 
-- Não esqueça de usar um alias para renomear a coluna da condicional.

SELECT * FROM sakila.film;

SELECT
    film_id,
    title,
CASE
	WHEN title = 'ACE GOLDFINGER' THEN 'Já assisti a esse filme'
    ELSE 'Não conheço o filme'
END AS conheco
FROM sakila.film;


SELECT
    film_id,
    rating,
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'    
    ELSE 'Proibido para menores de idade'
END AS "publico alvo"
FROM sakila.film;


-- ------------------------------------------------------------------------------------------------

-- Desafios com DIV e MOD -------------------------------------------------------------------------

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. 
-- Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.

SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- Temos uma sala de cinema que comporta 220 pessoas. 
-- Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

SELECT 220 DIV 12; 

-- Monte uma query que gere um valor entre 15 e 20.

SELECT ROUND(15 + (RAND() * 5));

-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

SELECT ROUND(15.7515971, 3);

-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

SELECT FLOOR(39.494);

-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

SELECT CEIL(85.234);

-- -------------------------------------------------------------------------------------------------------------------
























