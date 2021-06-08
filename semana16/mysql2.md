## Exercício 1

a)
**ALTER TABLE Actor DROP COLUMN salary;** 

- Altera a estrutura da tabela, removendo a coluna 'salario'.

b) 
**ALTER TABLE Actor CHANGE gender sex VARCHAR(6);**

- Altera a estrutura da tabela, redeclarando a coluna 'gender' como coluna 'sex VARCHAR(6)'.

c) 
**ALTER TABLE Actor CHANGE gender gender VARCHAR(255);**

- Altera a estrutura da tabela alterando o valor de "gender" para "gender" com string que aceita 255 caracteres.

d) *ALTER TABLE Actor CHANGE gender gender VARCHAR(255);*

## Exercício 2

a)

    UPDATE Actor
    SET name = 'Claudia Raia', birth_date = '1965-08-18'
    WHERE id = '003';

b) 

    UPDATE Actor
    SET name = 'GLORIA PIRES'
    WHERE name = 'Gloria Pires';

c)

    UPDATE Actor
    SET name = 'Dado Dollabela', 
    salary = 1000, 
    birth_date = '1980-11-06', 
    gender = 'male'
    WHERE id = '004';

d)

A Resposta é positiva mas n˜ão altera nada, pois o ID é inexistente - *0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*

## Exercício 3

a)
DELETE FROM Actor WHERE name = 'GLORIA PIRES'

b)
DELETE FROM Actor WHERE salary > 1000000;

## Exercício 4

a)
SELECT MAX(salary)
FROM Actor;

b)
SELECT MIN(salary)
FROM Actor WHERE gender = "female";

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)
SELECT SUM(salary) FROM Actor;

## Exercício 5

a) 
O operador GROUP vai permitir agrupar os dados em relação a  coluna de gênero da tabela Actor. A query retorna a quantidade de atores e atrizes na tabela em relação ao genero masculino e feminino.

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## Exercício 6

a)
ALTER TABLE Movie
ADD playing_limit_date DATE;

b)
ALTER TABLE Movie
CHANGE rating rating FLOAT;

c)
UPDATE Movie
SET playing_limit_date = "2020-11-15"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2021-12-07"
WHERE id = "003";

d)
DELETE FROM Movie WHERE id = "002";

UPDATE Movie
SET synopsis = 'Esse filme é uma bosta! Esqueça...'
WHERE id = '002';

*0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*, **OU SEJA, A MUDANÇA É APLICADA MAS NÃO ENCONTRA O ID E, POR ISSO, NADA MUDA.**

## Exercício 7

a)
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b)
SELECT AVG(rating) FROM Movie;

c)
SELECT COUNT(title) FROM Movie;
Resposta exata - **SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();**

d)
SELECT COUNT(*) FROM Movie WHERE release_Date > '2021-05-25';
REsposta Exata - **SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();**

e)
SELECT MAX(rating)
FROM Movie;

f)
SELECT MIN(rating)
FROM Movie;

## Exercício 8

a)
SELECT * FROM Movie
ORDER BY title;

b)
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 2;

c)
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 2;

d)
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 2;