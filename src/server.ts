import { fastify } from 'fastify'
import { memoriesRoutes } from './routes/memories'

const server = fastify()

// Registrar um arquivo de rotas separado
server.register(memoriesRoutes)

server
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀 Servidor HTTP decolou!!!'))
