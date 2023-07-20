import { FastifyReply, FastifyRequest } from 'fastify'
import { GetAllStudentsUseCaseFactory } from '../use-cases/factories/create-student-use-case-factory copy'

export const getAll = async (request: FastifyRequest, reply: FastifyReply) => {
  const getAllStudentsUseCase = GetAllStudentsUseCaseFactory.create()

  const students = await getAllStudentsUseCase.execute()
  reply.send(students)
}
