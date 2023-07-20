import { FastifyReply, FastifyRequest } from 'fastify'
import { StudentUseCaseFactory } from '../use-cases/factories/student-use-case-factory'

export const getAll = async (request: FastifyRequest, reply: FastifyReply) => {
  const getAllStudentsUseCase = StudentUseCaseFactory.buildGetAll()

  const students = await getAllStudentsUseCase.execute()
  reply.send(students)
}
