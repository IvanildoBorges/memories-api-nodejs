import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(server: FastifyInstance) {
  server.get('/users', async () => {
    const users = await prisma.user.findMany()

    return users
  })
}
