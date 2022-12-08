CREATE SCHEMA IF NOT EXISTS `SpotifyCloneTeste` DEFAULT CHARACTER SET utf8 ;
USE `SpotifyCloneTeste`;


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`planos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `valor` DECIMAL(6,2) NULL,
  PRIMARY KEY (`id`));



-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(50) NOT NULL,
  `idade` INT NOT NULL,
  `plano_id` INT,
  `data_assinatura` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_1_idx` (`plano_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
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
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SpotifyCloneTeste`.`albuns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SpotifyCloneTeste`.`albuns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `artista_id` INT NULL,
  `ano_lancamento` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_albuns_1_idx` (`artista_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
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
  `nome` VARCHAR(45) NULL,
  `duracao_segundos` INT NULL,
  `album_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cancoes_1_idx` (`album_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
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
  `cancao_id` INT NULL,
  `usuario_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_historico_de_reproducoes_1_idx` (`cancao_id` ASC) VISIBLE,
  INDEX `fk_historico_de_reproducoes_2_idx` (`usuario_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
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
  `usuario_id` INT NULL,
  `artista_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_seguindo_artistas_1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_seguindo_artistas_2_idx` (`artista_id` ASC) VISIBLE,
  INDEX `index4` () VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
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
