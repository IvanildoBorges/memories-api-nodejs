import cors from '@fastify/cors'
import { fastify } from 'fastify'
import { memoriesRoutes } from './routes/memories'

const server = fastify()

// Registrar um arquivo de rotas separado
server.register(cors, {
  origin: ['http://localhost:3333', 'endereço_de_produção'], // urls que podem acessar o backend
})
server.register(memoriesRoutes)

server
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀 Servidor HTTP decolou!!!'))
