import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/', (request, response) => {
    response.send('Hello World!')
  })
}
