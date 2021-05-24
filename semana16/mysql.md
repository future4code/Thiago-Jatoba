## Exercício 1

    CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    );

a) 
- CREATE TABLE é o comando para criação da tabela e deve ser seguida pelo nome que daremos à tabela. Dentro do comando, devemos definir os nomes dos campos de acordo com a conveniência do banco de dados, e determinar o tipo de dado que poderá ser incluído neste campo.

- A chave primária, ou PRIMARY KEY, é o conceito mais básico relacionado à organização em um banco de dados. Toda tabela possuirá uma, e somente uma, chave primária. Essa chave é utilizada como identificador único da tabela, sendo representada por aquele campo (ou campos) que não receberá valores repetidos.

- A restrição NOT NULL garante que uma coluna não admite valores NULL. Isto significa que será abortada uma operação de INSERT ou UPDATE que coloque um valor NULL nessa coluna. A sua utilização é útil sempre que as regras de negócio obriguem ao preenchimento de um campo.

- Tipos de dados de caractere que sejam de tamanho fixo, CHAR ou de tamanho variável, VARCHAR.

- DATE é armazenamento de data no esquema YYYY-MM-DD, ou seja, um dia.

b)
- SHOW DATABASES 

    'cruz-2114935-thiago-jatoba'
    'information_schema'

    *Lista os bancos de dados no host do servidor MySQL.* 

- SHOW TABLES

    'Actor'

    *Mostrar as tabelas do banco de dados atual.*

c)
- DESCRIBE

    'id','varchar(255)','NO','PRI',NULL,''
    'name','varchar(255)','NO','',NULL,''
    'salary','float','NO','',NULL,''
    'birth_date','date','NO','',NULL,''
    'gender','varchar(6)','NO','',NULL,''

## Exercício 2
a)

    VALUES(
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
    ), (
    "002",
     "Gloria Pires",
     1200000,
    "1963-08-23"
    );

b)

*Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'*, ou seja, temos uma entrada duplicada.

c)

- Temos 4 valores para 3 chaves apenas.
*Error Code: 1136. Column count doesn't match value count at row 2*, ou seja, a contagem de colunas não corresponde à contagem de valores na linha 2.

d)

- O campo de 'nome' não está recebendo valor. *Error Code: 1364. Field 'name' doesn't have a default value.*


e) 

- Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
*Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1*

## Exercício 3

a) 
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

b) 
SELECT salary from Actor WHERE name = "Tony Ramos";

c)
Todos os valores retornam NULL para "invalid";

d)
SELECT id, name, salary from Actor WHERE salary <= 500000;

e)
Não existe coluna com identificador "nome".*Error Code: 1054. Unknown column 'nome' in 'field list'*

SELECT id, name from Actor WHERE id = "002".

## Exercício 4

a)
Os valores buscados serão nomes com iniciais A ou J e salário maior que R$300.000.

b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
*Teste também com OR* - SELECT * FROM Actor WHERE name LIKE "A%" OR salary > 350000;

c) 
SELECT * FROM Actor WHERE name LIKE "%G%" OR "%g%";

d) 
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
*Testei também com OR* - SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") OR salary BETWEEN 350000 AND 900000;

## Exercício 5

a) 
Um *TEXT* permite 65535 bytes. E esta diferenciação é importante se estiver usando UTF-8 ou outra codificação multibyte já que um caractere pode ocupar 3 bytes.

    CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
    );

    INSERT INTO Movie (id, title, synopsis, release_date, rating) 
    VALUES(
	'001',
	'Se Eu Fosse Você',
    'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
    '2006-01-06',
    7
    ),(
	'002',
    'Doce de mãe',
    'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
	'2012-12-27',
    9
    ),(
	'003',
    'Dona Flor e Seus Dois Maridos',
    'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
	'2017-02-11',
    8
    ),(
	'004',
    'Bacurau',
    'Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade.',
	'2020-08-29',
    10
    );

## Exercício 6

a)
SELECT id, title, rating FROM Movie WHERE id="004"

b)
SELECT * FROM Movie WHERE title="Doce de Mãe";

c)
SELECT id, title, synopsis FROM Movie WHERE rating <= 7;

## Exercício 7

a)
SELECT * FROM Movie WHERE title LIKE "%vida%";

b)
SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";

c)
SELECT * FROM Movie WHERE release_Date <= "2010-12-31";

d)
SELECT * FROM Movie WHERE  release_Date < "2020-12-31" AND (title LIKE "%casados%" OR synopsis LIKE "%mapa%") AND rating > 7;