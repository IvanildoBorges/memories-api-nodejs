import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(server: FastifyInstance) {
  server.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        CreatedAt: 'asc',
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  server.get('/memories/:id', async (request) => {
    // Schema do id: um id do tipo string e uuid
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    // o zod validará se o objeto do parametro segue a estrutura do  paramSchema
    const { id } = paramsSchema.parse(request.params)

    // trás somente a memoria onde o id for igual ao id recebido
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  server.post('/memories', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false), // faz uma tradução de 0 ou 1 do formulario para true ou false
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '11616392-d7b8-4635-90a1-1735c94f1944',
      },
    })

    return memory
  })

  server.put('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false), // faz uma tradução de 0 ou 1 do formulario para true ou false
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

  server.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
