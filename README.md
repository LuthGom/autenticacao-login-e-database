# Projeto de Autenticação de Login (Front e Back) e Banco de Dados

## FrontEnd - Página de Login e Requisição ao BackEnd

## BackEnd - Api de autenticação de Login

## Bando de Dados - Tabelas de Produtos, Categorias e Usuarios

## O projeto foi criado para rodar localmente nas máquinas, utilizando container do docker e bando de dados mysql. Então, recomenda-se fortemente que baixe pelo menos o docker em sua máquina.

## Após baixar o docker, rode os seguintes comandos no terminal para: puxar a imagem oficial do mysql do dockerhub, gerar um container db local com base na imagem do mysql puxada e conferir se está rodando, respectivamente.

<ul>
    <li>docker pull mysql</li>
    <li>docker run -p 3306:3306 --name mysql_magalu -e MYSQL_ROOT_PAWSSORD=m@galu123 -d mysql</li>
</ul>

## Após rodar os comandos acima, conecte com o bando de dados do mysql com os dados gerados descritos abaixo:

<ul>
<li>Connection Name: (livre escolha)</li>
<li>Hostname: 127.0.0.1</li>
<li>Username: root</li>
<li>Password: m@galu123</li>
</ul>

## Para gerar os dados esperados no bando de dados, rode os scripts contidos na pasta bandoDeDados deste repositório.

## No terminal no caminho deste repositório, rode o comando baixar todas as dependências do backEnd:

<p> npm install </p>

## Rode o comando abaixo para rodar o backend:

<p> npm start</p>

## Rotas do BackEnd

<p>Requisição de Login </p>

## POST
### http://localhost:3000/login

<p>Retorna Todos os Usuários existentes no banco de dados </p>

## GET
### http://localhost:3000

## Após rodar o comando acima, você pode fazer login no frontEnd na página de login. Basta abrir o arquivo index.html na linha principal no navegador para usufruir. O Login esperado é o:

<ul>
    <li>Campo USUÁRIO: magalu</li>
    <li>Campo SENHA: m@galu123</li>

</ul>
