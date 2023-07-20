import { FastifyInstance } from 'fastify'
import { create } from './controllers/create'

export const studentsRoutes = async (app: FastifyInstance) => {
  app.post('/', create)
}
