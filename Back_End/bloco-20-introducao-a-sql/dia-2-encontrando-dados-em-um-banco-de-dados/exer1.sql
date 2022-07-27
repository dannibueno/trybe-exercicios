-- 1 - Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".?
SELECT 'This is SQL Exercise, Practice and Solution' AS resultado;

-- 2 - Escreva uma query para exibir três números em três colunas.?
SELECT 1 AS num_um, 2 AS num_dois, 3 AS num_tres;

-- 3 - Escreva uma query para exibir a soma dos números 10 e 15.?
SELECT 10 + 15;
SELECT 10 AS num1, 15 AS num2, 10 + 15 AS soma;

-- 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.?
SELECT format(((100 * 2) - 100), 0) AS resultado;
	
-- 5 - Escreva uma query para exibir todas as informações de todos os cientistas.?
SELECT * FROM Scientists;

-- 6 - Escreva uma query para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.?
SELECT * FROM Projects;
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Projects; 

-- 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.?
SELECT * FROM Scientists
ORDER BY name ASC;

-- 8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.?
SELECT name FROM Projects ORDER BY name DESC;

-- 9 - Escreva uma query que exiba a string "O projeto name precisou de hours horas para ser concluído." para cada projeto.
SELECT CONCAT ('O projeto "', name, '" precisou de', hours, ' para ser concluido') AS descricao_do_projeto FROM Projects;

-- 10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT name, hours FROM Projects order by hours DESC LIMIT 3;

-- 11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT * FROM AssignedTo;
SELECT distinct project from AssignedTo;

-- 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT name, hours FROM Projects order by hours DESC LIMIT 1;

-- 13 - Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name, hours FROM Projects order by hours ASC LIMIT 1 offset 1;

-- 14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects order by hours ASC LIMIT 5;

-- 15 - Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem ', count(name), ' cientistas na tabela Scientists') FROM Scientists;
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists;

SELECT * FROM Scientists;



