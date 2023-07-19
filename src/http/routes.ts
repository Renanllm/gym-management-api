import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    reply.send('Hello from AWS EC2 instance!')
  })

  app.get('/students', async (request, reply) => {
    console.log('chegou')
    const students = await prisma.student.findMany()
    reply.send({ students })
  })
}
