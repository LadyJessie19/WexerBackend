

# Documentação do Projeto Backend

Este documento serve como documentação para o projeto de backend, 
detalhando as tecnologias utilizadas, as entidades envolvidas e 
instruções sobre como executar o projeto localmente.

### Ficha Técnica

- **Autor**: Jessie Moura
- **Status**: Em desenvolvimento
- **Data de início:**: 2023-06-30
- **Data de conclusão:**: 2023-07-30

## Visão Geral do Projeto

O projeto de backend consiste em uma API RESTful desenvolvida utilizando 
JavaScript e TypeScript, juntamente com os frameworks Express e Mongoose. 
A API é responsável por gerenciar os dados e a lógica de negócio para uma aplicação web.

## Tecnologias Utilizadas

O projeto de backend foi desenvolvido utilizando as seguintes tecnologias:

- Linguagens de programação: JavaScript, TypeScript
- Framework web: Express.js
- Banco de dados: MongoDB
- ODM (Object-Document Mapping): Mongoose

## Entidades

[print ou img do diagrama]
![diagram](https://media.discordapp.net/attachments/1080178640756691157/1125691832773378148/diagrama.PNG.png?width=1020&height=384)

O projeto de backend manipula as seguintes entidades:

1. Usuário: representa um usuário da aplicação. Possui os seguintes campos:
   - ID: identificador único do usuário
   - Nome: nome do usuário
   - Email: endereço de email do usuário
   - Senha: senha criptografada do usuário
   - Data de Criação: data de criação do registro do usuário

2. Postagem: representa uma postagem feita por um usuário. Possui os seguintes campos:
   - ID: identificador único da postagem
   - Título: título da postagem
   - Conteúdo: conteúdo da postagem
   - Autor: ID do usuário que criou a postagem
   - Data de Criação: data de criação da postagem

## Como Rodar o Projeto

Para executar o projeto de backend localmente, siga as instruções abaixo:

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

3. Acesse o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

4. Instale as dependências do projeto:

   ```bash
   npm install
   ```

5. Configure as variáveis de ambiente necessárias, como a URL do banco de dados MongoDB.

6. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

7. O projeto de backend estará em execução em http://localhost:3000.

Certifique-se de ter o MongoDB instalado e em execução em sua máquina para que 
o projeto possa se conectar corretamente ao banco de dados.

## Conclusão

Este documento forneceu uma visão geral do projeto de backend, detalhando as 
tecnologias utilizadas, as entidades manipuladas e as instruções para executar 
o projeto localmente. Para obter mais informações sobre as rotas disponíveis e 
as funcionalidades da API, consulte a documentação completa ou os arquivos 
de código-fonte do projeto.