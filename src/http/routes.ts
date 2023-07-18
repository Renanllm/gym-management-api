import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.get('/', (request, response) => {
    response.send('Hello from AWS EC2 instance!')
  })

  app.get('/students', async (request, response) => {
    return await prisma.student.findMany()
  })
}
