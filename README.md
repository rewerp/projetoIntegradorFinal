# Projeto Integrador - Pavimenta BR

## Equipe - Grupo 24

* Misael Alberto Moreira
* Murilo Badelatto
* Victoria Caetano Romualdo
* Matheus De Souza Ferreira
* Rodrigo Ferreira Da Silva
* Rewer Pinheiro

## Sobre o projeto

O projeto **Pavimenta BR** nasceu da necessidade de fornecer para a população um canal digital para informar sobre as vias automotoras que precisam de manutenção e reparos em sua pavimentação. O objetivo é estabelecer uma comunicação quase direta entre a população e a administração municipal.

O solicitante acessa a plataforma, cria um cadastro e, em seguida, está apto a cadastrar solicitações de reparos em vias públicas. É possível realizar quantas solicitações forem necessárias, indicando o endereço para manutenção e reparos.

O projeto é composto por uma API desenvolvida em Node.js e uma aplicação web. Para armazenar os dados, é utilizado o banco de dados PostgreSQL através da plataforma Neon.tech. Essa plataforma permite a utilização de um banco de dados sem a necessidade de instalação local e com centralização de servidor.

## Técnologias utilizadas

* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" height="20" /> HTML
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" height="20" /> CSS
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" height="20" /> Javascript
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" height="20" /> Node.js
* <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-original.svg" height="20" /> PostgreSQL
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" height="20" /> VS Code
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" height="20" /> Git e GitHub

## Requisitos

Para executar o sistema, é preciso ter instalado, os aplicativos abaixo:

* Node.js
* Navegador de internet (browser)

## Instalação e configuração

Para preparar o ambiente para utilizar o sistema, é preciso seguir os seguintes passos:

1. Para iniciar, baixe o repositório para um pasta local, pode utilizar o Git, mas não é obrigatório;
1. Depois é necessário fazer o download e instalação do [Node.js](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi);
1. Será preciso criar o arquivo _**".env"**_ dentro da pasta do projeto _**"pi-front"**_, para configurar o sistema:
    1. Abra o arquivo _**".env.example"**_, copie o conteúdo e crie um arquivo _**".env"**_ com as informações reais para configuração;
1. Depois de configurado os projetos:
    1. Abra a pasta _**"pi-api"**_ em um terminal, pode ser **cmd.exe** ou qualquer outro, e execute o comando **"npm install"**. 
    1. Repita o passo para _**"pi-front"**_.

**IMPORTANTE** - O banco de dados PostgreSQL, está hospedado na plataforma Neon.tech e a aplicação já possuí toda a configuração necessária para integração, sem a necessidade de instalação local.

## Utilizando a aplicação

Após realizar todas as configurações do ambiente do projeto, será preciso executar os servidores da API e da aplicação web:

1. Depois de configurado os projetos:
    1. Abra a pasta _**"pi-api"**_ em um terminal, pode ser **cmd.exe** ou qualquer outro, e execute o comando **"npm start"**. Se der certo deve demonstrar uma mensagem informando que o servidor está sendo executado.
    1. Repita o passo para _**"pi-front"**_.
1. Após executar os servidores, abre o navegador de internet, e acesso o servidor da aplicação web, pelo endereço _**"localhost:3001"**_ ou pelo endereço indicado no arquivo _**".env"**_.

Se tudo der certo, deve ser apresentado a tela inicial da aplicação.

<img src="https://raw.githubusercontent.com/rewerp/projetoIntegradorFinal/main/imagens/front-01.png" height="400" title="Tela inicial" />
<img src="https://raw.githubusercontent.com/rewerp/projetoIntegradorFinal/main/imagens/front-02.png" height="300" title="Tela de login" />