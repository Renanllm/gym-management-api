import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.get('/', (request, response) => {
    response.send('Hello from AWS EC2 instance!')
  })
}
