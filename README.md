# API_REST_CURSOJS

<h2>Tecnologias usadas</h2>
NodeJS, ExpressJS, PostgreSQL, SequelizeORM, bcryptjs, jsonwebtoken.
<hr>

<h2>Sobre o projeto</h2>
Uma API Rest onde se manipula dados de alunos de uma escola.  <br>
<img src="imgs-readme/Aluno.png" />

E para manipular esses dados, é necessário estar logado no sistema com algum usuário, cujos dados são: <br>
<img src="imgs-readme/User.png" />

O procedimento de autenticação de usuários é feito usando um JWT gerado quando o usuário é criado usando a biblioteca `jsonwebtoken`. <br>
Todos os passwords sofrem um hash para serem salvos no banco de dados, por motivos de segunraça, usando a biblioteca `bcryptjs`.

# Instruções para a execução do projeto. 
OBS: O NodeJS e o PostgresSQL devem estar instalados no ambiente onde será executado o projeto.

1º passo - Com o PostgresSQL em execução, crie um banco onde serão salvas as informações referentes aos usuários e alunos.

2º passo - Preencha o arquivo .env que está dentro da pasta raiz  do proejeto com todas as informações que pedem lá, colocando o valor logo após o sinal de igualdade, sem aspas. Que são:<br> 

```bash
# o nome do banco que usará para salvar os dados (criado no passo anterior)
DATABASE=

# a porta onde seu banco está ounvido as requisições
DATABASE_PORT=

# o nome do usuário do banco de dados
DATABASE_USERNAME=

# a senha do banco de dados
DATABASE_PASSWORD=

# vários caracteres aleatórios para que o bcryptjs possa gerar o hash a partir da senha do usuário.
TOKEN_SECRET=

# tempo de expiração do token do usuário gerado (exemplos: 7d, 5d; para 7 dias e 5 dias respectivamente).
TOKEN_EXPIRATION=

APP_URL=http://localhost:3001

APP_PORT=3001 
```

* OBS: A princípio, eu deixei a porta padrão da API como 3001 (a porta onde o frontend deve fazer as requisições). Mas caso necessário, pode se alterar.

3º passo - Instale as dependências do projeto, com o comando `npm i` em um terminal aberto na pasta raiz do projeto.

4º passo - Por fim, em um terminal aberto na parta raiz do projeto, execute o comando `npm run dev` para que a API comece a escutar as requisições.
