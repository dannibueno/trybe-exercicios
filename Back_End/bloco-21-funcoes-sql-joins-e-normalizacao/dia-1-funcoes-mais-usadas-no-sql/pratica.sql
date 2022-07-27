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

