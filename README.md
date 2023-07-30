# Documentação do Projeto de Backend - Wexer Psi Backend

## Terceiro Módulo da Arnia - Projeto Wexer Psi Backend

O Wexer Psi Backend é o projeto do terceiro módulo da Arnia, sendo um Gerenciador de Pacientes e Registros Médicos. 

Seu objetivo é desenvolver o backend responsável por gerenciar informações relacionadas a usuários, pacientes, linhas do tempo, ocorrências e arquivos.

Este projeto de backend foi desenvolvido com foco em criar uma aplicação robusta, escalável e segura para fornecer uma base sólida para a construção de uma aplicação web completa.

## Características Principais

O projeto de backend possui as seguintes características principais:

1. Autenticação: Implementação de um sistema de autenticação seguro para proteger as rotas e recursos da aplicação.

2. Gerenciamento de Usuários: Funcionalidades para criação, atualização e exclusão de usuários, incluindo informações de perfil.

3. Gerenciamento de Dados: Manipulação de dados relacionados a psicólogos, pacientes, históricos médicos e anexos.

4. Relacionamentos: Estabelecimento de relações entre psicólogos, pacientes, históricos médicos e ocorrências, garantindo integridade e consistência dos dados.

5. Paginação: Implementação de paginação em listas de resultados para melhorar o desempenho e a usabilidade da aplicação.

6. Testes unitários: Desenvolvimento de testes automatizados para garantir a qualidade do código e a funcionalidade correta das rotas e serviços.

## Tecnologias Utilizadas

O projeto de backend está sendo desenvolvido utilizando as seguintes tecnologias:

- Linguagem de Programação: JavaScript/TypeScript
- Framework: Node.js
- Banco de Dados: MongoDB
- Modelagem do Banco de dados: Mongoose
- Framework Web: Express.js
- Autenticação: JWT e bcrypt
- Testes Automatizados: Jest
- Gerenciador de Pacotes: npm
- Transpilação TS/JS: Babel
- Variáveis de ambiente: Dotenv

## Estrutura do Projeto

A estrutura do projeto de backend segue uma arquitetura de camadas, com separação de responsabilidades. Essa estrutura bem organizada torna o projeto mais legível, facilita a manutenção do código e ajuda na separação clara de funcionalidades. 

Cada entidade do sistema (usuários, pacientes, linhas do tempo, ocorrências e arquivos) é tratada como um módulo separado, o que permite o desenvolvimento e modificação de cada parte independentemente, facilitando a escalabilidade e a colaboração em equipe.

A seguir, estão as principais pastas e arquivos do projeto:

- `app`: Contém a lógica principal da aplicação, dividida em módulos para cada entidade do sistema (Auth, User, Patient, Timeline, Occurrence, File). Cada módulo possui ***controllers***, ***services***, ***repositories*** e outros componentes relacionados à sua funcionalidade.

- `config`: Contém configurações adicionais da aplicação, como o arquivo databaseConfig.ts, que também lida com a conexão com o MongoDB.

- `middlewares`: Pasta para os middlewares utilizados nas rotas, como o middleware de autenticação e de upload de arquivos.

- `routes`: Definição das rotas da API, cada arquivo corresponde a um módulo específico (Auth, User, Patient, etc.), onde são definidas as rotas e suas respectivas funções controladoras.

- `utils`: Pasta para utilitários e funções auxiliares que podem ser usados em toda a aplicação.

- `server.ts`: Arquivo principal do servidor, responsável por inicializar o servidor Express e registrar as rotas da API.

- `types`: Contém definições de tipos e interfaces TypeScript utilizados em toda a aplicação.

## Etapas de Desenvolvimento

O desenvolvimento do projeto de backend seguirá as seguintes etapas:

1. Configuração inicial do ambiente de desenvolvimento, incluindo a instalação das dependências necessárias.

2. Criação da estrutura básica do projeto, incluindo pastas e arquivos principais.

3. Implementação das rotas e controladores para as funcionalidades de autenticação.

4. Desenvolvimento dos serviços e repositórios relacionados ao gerenciamento de usuários.

5. Criação das funcionalidades de gerenciamento de médicos, pacientes, históricos médicos e anexos.

6. Estabelecimento dos relacionamentos entre as entidades e implementação das funcionalidades relacionadas.

7. Desenvolvimento dos testes automatizados para garantir a qualidade e funcionalidade correta do código.

8. Revisão e refatoração do código, levando em consideração boas práticas de programação e padrões de projeto.

9. Documentação final do projeto, incluindo instruções de implantação e uso.

Para obter mais detalhes, o arquivo `planning.todo` pode ser encontrado na pasta raiz do projeto. A extensão ToDo+ do VS Code possibilita aos desenvolvedores criarem um arquivo para gerenciar as tarefas do projeto e acompanhar o tempo gasto em cada uma delas.

## Rotas configuradas

Foram implementadas rotas públicas, para criar novos usuários e autenticar usuários existentes, e rotas privadas para obter, atualizar e deletar dados de usuários, pacientes, linhas do tempo, ocorrências e arquivos.

### Rotas públicas

POST '/users'

POST '/auth'

### Rotas privadas

GET '/users'

GET PATCH DELETE '/users/:id'

POST GET '/users/:user_id/patients'

GET '/patients'

GET PATCH DELETE '/patients/:patient_id'

POST GET '/patients/:patient_id/timelines'

GET '/timelines'

GET PATCH DELETE '/timelines/:timeline_id'

POST GET '/timelines/:timeline_id/occurrences'

GET '/occurrences'

GET PATCH DELETE '/occurrences/:occurrence_id'

POST GET '/occurrences/:occurrence_id/files' 

GET '/files'

GET DELETE '/files/:file_id'

## Scripts do projeto

1. `dev` : `tsnd src/server.ts`

Comando para executar o servidor em modo de desenvolvimento com hot-reloading usando ts-node-dev.

2. `start` : `node dist/server.js`

Comando executar o servidor a partir dos arquivos compilados em dist.

2. `build` : `tsc`

Comando para buildar o projeto.

3. `babel` : `babel src --out-dir dist`

Comando para transpilar os arquivos TypeScript em JavaScript usando Babel e salvar na pasta dist.

4. `babel-start` : `babel-node dist/server.js`

Comando para executar o servidor a partir dos arquivos transpilados em dist usando babel-node.

5. `test` : `jest`

Comando para executar os testes usando o Jest.

6. `cov` : `npx jest --coverage`

Comando para executar os testes e gerar o relatório de cobertura de código com o Jest.

## Como rodar o projeto

Passo 1: Clonar o repositório

```
git clone git@github.com:LadyJessie19/wexerBackend.git
```

Este comando irá clonar o repositório do GitHub para o seu computador. Certifique-se de que você tenha o Git instalado e tenha permissão de acesso para clonar o repositório.

Passo 2: Instalar as dependências

```
npm i
```

Este comando instalará todas as dependências do projeto listadas no arquivo package.json. Certifique-se de que você tenha o Node.js instalado no seu computador.

Passo 3: Configurar as variáveis de ambiente

É preciso criar um arquivo .env com as variáveis de ambiente. Um arquivo .env.example está na pasta raiz do projeto.

- URL: O endereço url do banco de dados mongoDB que será manipulado.
- PORT: O número da porta onde o servidor express será iniciado.
- SECRET_KEY: A chave secreta que será usada com a biblioteca JWT para criação de tokens de autenticação.
- USER_URL: O endereço que deve ser concatenado com filename para retornar o arquivo com link para o usuário.

Passo 4: Construir o projeto

```
npm run build
```

Este comando irá construir o projeto. Dependendo da configuração do projeto, ele pode executar a transpilação do código (caso esteja usando TypeScript ou Babel), gerar arquivos otimizados ou preparar o projeto para ser executado.

Passo 5: Iniciar o projeto

```
npm start
```

Este comando iniciará a execução do projeto. Dependendo do que foi definido no arquivo package.json, ele pode iniciar o servidor da aplicação ou qualquer outra ação necessária para o funcionamento do projeto.

Após seguir todos os passos acima, o seu projeto deve estar rodando corretamente no ambiente especificado. Lembre-se de ler o arquivo README.md do repositório, pois pode conter informações adicionais sobre o projeto, requisitos específicos e outras instruções úteis para o desenvolvimento e execução do código.

---

Este projeto de backend foi desenvolvido com foco em criar uma aplicação robusta, escalável e segura. Ele utiliza tecnologias modernas e segue boas práticas de desenvolvimento. O objetivo é fornecer uma base sólida para a construção de uma aplicação web completa.