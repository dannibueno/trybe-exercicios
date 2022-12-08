-- PROJETO

-- -----------------------------------------------------
-- DESAFIO 2
-- -----------------------------------------------------

SELECT 
  (SELECT COUNT(*)
	FROM SpotifyClone.cancoes) AS "cancoes", 
  
  (SELECT COUNT(*)
	FROM SpotifyClone.artistas) AS "artistas",
  
  (SELECT COUNT(*)
	FROM SpotifyClone.albuns) AS "albuns";
    
    
-- -----------------------------------------------------
-- DESAFIO 3
-- -----------------------------------------------------

SELECT   u.nome_usuario AS 'usuario', 
         COUNT(hr.usuario_id) AS "qtde_musicas_ouvidas",
         ROUND(SUM(c.duracao_segundos)/60, 2) AS "total_minutos"
         
FROM  SpotifyClone.historico_de_reproducoes hr
JOIN SpotifyClone.usuarios u ON u.id = hr.usuario_id
JOIN SpotifyClone.cancoes c ON c.id = hr.cancao_id
GROUP BY hr.usuario_id
ORDER BY u.nome_usuario;

-- -----------------------------------------------------
-- DESAFIO 4
-- -----------------------------------------------------
-- YEAR pega somento o ano da data
-- MAX tras o ano maior  

SELECT  u.nome_usuario AS 'usuario',
    
IF(Year(MAX(hr.data_reproducao)) >= '2021', 'Usuário ativo', 'Usuário inativo') AS 'condicao_usuario'

FROM SpotifyClone.historico_de_reproducoes hr
JOIN SpotifyClone.usuarios u ON u.id = hr.usuario_id
GROUP BY hr.usuario_id
ORDER BY u.nome_usuario;

-- -----------------------------------------------------
-- DESAFIO 5
-- -----------------------------------------------------

SELECT c.nome AS 'cancao', COUNT(hr.cancao_id) AS 'reproducoes'

FROM SpotifyClone.cancoes c
JOIN SpotifyClone.historico_de_reproducoes hr ON c.id = hr.cancao_id
GROUP BY hr.cancao_id
ORDER BY reproducoes DESC, c.nome LIMIT 2;

-- -----------------------------------------------------
-- DESAFIO 6
-- -----------------------------------------------------

SELECT 
MIN(p.valor) AS 'faturamento_minimo',
MAX(p.valor) AS 'faturamento_maximo',
ROUND(SUM(p.valor)/ COUNT(u.id),2) AS 'faturamento_medio',
SUM(p.valor) AS 'faturamento_total'

FROM SpotifyClone.planos p
JOIN SpotifyClone.usuarios u ON u.plano_id = p.id;


-- -----------------------------------------------------
-- DESAFIO 7
-- -----------------------------------------------------

SELECT 
ar.nome AS 'artista',
ul.nome AS 'album',
COUNT(sa.artista_id) AS 'seguidores'

FROM SpotifyClone.artistas ar
JOIN SpotifyClone.albuns ul ON ul.artista_id = ar.id
JOIN SpotifyClone.seguindo_artistas sa ON sa.artista_id = ar.id
GROUP BY ul.id
ORDER BY COUNT(sa.artista_id) DESC, ar.nome, ul.nome;


-- -----------------------------------------------------
-- DESAFIO 8
-- -----------------------------------------------------

SELECT 
ar.nome AS 'artista',
ul.nome AS 'album'

FROM SpotifyClone.artistas ar
JOIN SpotifyClone.albuns ul ON ul.artista_id = ar.id
WHERE ar.nome = 'Walter Phoenix'
ORDER BY ar.nome;

-- -----------------------------------------------------
-- DESAFIO 9
-- -----------------------------------------------------

SELECT 
c.nome AS 'nome',
COUNT(cancao_id) AS 'reproducoes'

FROM SpotifyClone.cancoes c

JOIN SpotifyClone.historico_de_reproducoes hr ON hr.cancao_id = c.id
JOIN SpotifyClone.usuarios u ON u.id = hr.usuario_id
WHERE u.plano_id IN (1, 4)
GROUP BY c.nome;

-- -----------------------------------------------------
-- DESAFIO 10
-- -----------------------------------------------------
