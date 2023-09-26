import { PrismaClient } from '@prisma/client'
import { fastify } from 'fastify'

const server = fastify()
const prisma = new PrismaClient()

server.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

server
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀 Servidor HTTP decolou!!!'))
