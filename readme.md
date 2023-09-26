# Server NodeJS
Aplicação de uma API NodeJS com Fastify e Prisma

### Projeto de um sistema de registro de memórias de usuários usando o framework Fastify, ZOD para validar tipos e o ORM Prisma no NodeJS.

### Tecnologias
- NodeJS
- Fastify
- Prisma
- SQLite
- ESLint
- Typescript
- TSX
- Zod

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

