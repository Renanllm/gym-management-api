import { FastifyInstance } from 'fastify'
import { create } from './controllers/create'
import { getAll } from './controllers/get-all'

export const studentsRoutes = async (app: FastifyInstance) => {
  app.get('/', getAll)
  app.post('/', create)
}
