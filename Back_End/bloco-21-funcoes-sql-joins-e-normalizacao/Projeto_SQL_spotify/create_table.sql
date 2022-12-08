CREATE SCHEMA IF NOT EXISTS `SpotifyCloneTeste` DEFAULT CHARACTER SET utf8 ;
USE `SpotifyCloneTeste`;


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`planos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45),
  `valor` DECIMAL(6,2),
  PRIMARY KEY (`id`));



-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(50),
  `idade` INT,
  `plano_id` INT,
  `data_assinatura` TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_1_idx` (`plano_id` ASC) ,
    CONSTRAINT `fk_usuario_1`
    FOREIGN KEY (`plano_id`)
    REFERENCES `SpotifyCloneTeste`.`planos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`artistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`artistas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45),
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`albuns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`albuns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45),
  `artista_id` INT,
  PRIMARY KEY (`id`),
  INDEX `fk_albuns_1_idx` (`artista_id` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  CONSTRAINT `fk_albuns_1`
    FOREIGN KEY (`artista_id`)
    REFERENCES `SpotifyCloneTeste`.`artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`cancoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`cancoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45),
  `duracao_segundos` INT,
  `ano_lancamento` INT,
  `album_id` INT,
  PRIMARY KEY (`id`),
  INDEX `fk_cancoes_1_idx` (`album_id` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  CONSTRAINT `fk_cancoes_1`
    FOREIGN KEY (`album_id`)
    REFERENCES `SpotifyCloneTeste`.`albuns` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`historico_de_reproducoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`historico_de_reproducoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_reproducao` TIMESTAMP DEFAULT NOW(),
  `cancao_id` INT,
  `usuario_id` INT,
  PRIMARY KEY (`id`),
  INDEX `fk_historico_de_reproducoes_1_idx` (`cancao_id` ASC) ,
  INDEX `fk_historico_de_reproducoes_2_idx` (`usuario_id` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  CONSTRAINT `fk_historico_de_reproducoes_1`
    FOREIGN KEY (`cancao_id`)
    REFERENCES `SpotifyCloneTeste`.`cancoes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_historico_de_reproducoes_2`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `SpotifyCloneTeste`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`seguindo_artistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`seguindo_artistas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT,
  `artista_id` INT,
  PRIMARY KEY (`id`),
  INDEX `fk_seguindo_artistas_1_idx` (`usuario_id` ASC) ,
  INDEX `fk_seguindo_artistas_2_idx` (`artista_id` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  CONSTRAINT `fk_seguindo_artistas_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `SpotifyCloneTeste`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_seguindo_artistas_2`
    FOREIGN KEY (`artista_id`)
    REFERENCES `SpotifyCloneTeste`.`artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;