# Server NodeJS
Aplicação de uma API NodeJS com Fastify e Prisma

### Projeto de um sistema de streaming de video usando o framework Fastify no NodeJS.

### Tecnologias
- NodeJS
- Fastify
- Prisma
- SQLite
- ESLint
- Typescript
- TSX

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependências:
    
    npm install

3 - Instale os plugins ESLint, Prisma, Tailwind CSS IntelliSense e PostCSS Language Suport no seu VS Code

4 - Executar o comando para criar as tabelas
_coloque o nome da migrate como: create users table_

    npx prisma migrate dev

_caso deseje ver o banco "dev" criado:_

    npx prisma studio

5 - Execute o projeto

    npm run dev

