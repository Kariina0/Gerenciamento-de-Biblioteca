# API de Gerenciamento de Biblioteca

Este repositório contém uma API simples para gerenciar autores, livros, usuários e empréstimos.

Pré-requisitos

- Node.js (v16+ recomendado)
- MongoDB (ou uma URI de conexão MongoDB)

Como executar

1. Instale dependências:

   npm install

2. Crie um arquivo `.env` na raiz com as variáveis (exemplo):

   MONGO_URI=mongodb://localhost:27017/biblioteca
   PORT=3000

3. Inicie a API:

   npm run dev

A API será acessível em http://localhost:3000 (ou na porta definida em `PORT`).

Rotas principais
As rotas seguem um padrão REST e estão montadas nos caminhos abaixo:

- /authors (GET, POST, GET/:id, PUT/:id, DELETE/:id)
- /books (GET, POST, GET/:id, PUT/:id, DELETE/:id)
- /users (GET, POST, GET/:id, PUT/:id, DELETE/:id)
- /loans (GET, POST, GET/:id, PUT/:id, DELETE/:id)

Arquitetura rápida

- Os modelos estão em `src/models`.
- A lógica está em `src/controllers`.
- As rotas estão em `src/routes` e são montadas em `src/index.js`.

Exemplo de requisição (curl):

GET todos os livros:

curl http://localhost:3000/books

Conteúdo adicional
Verifique `src/index.js` para ver as variáveis de ambiente usadas (`MONGO_URI`, `PORT`).

