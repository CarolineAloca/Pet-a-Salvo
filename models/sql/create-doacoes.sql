use helple

CREATE TABLE doacoes
(
  id int IDENTITY (1,1) primary key,
  nome varchar(50) not null,
  cpf varchar (11) not null,
  email varchar(30) not null,
  telefone varchar(20) not null,
  celular varchar(20) not null,
  cep varchar(20) not null,
  endereco varchar(50) not null,
  arroz int not null,
  feijao int not null,
  agua int not null,
  oleo int not null,
  macarrao int not null,
  molhoDeTomate int not null,
  dataColeta date not null,
  horarioAtendimento varchar(10) not null,
  nossoContato varchar(15) not null,
  atualizacoes TINYINT not null,

)

INSERT into doacoes
values
  ()