import { FastifyInstance } from 'fastify'
import { studentsRoutes } from './domains/Student/routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(studentsRoutes, { prefix: '/students' })
}
