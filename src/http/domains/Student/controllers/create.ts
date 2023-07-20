import { ResourceAlreadyExistsError } from '@/http/domains/Student/use-cases/errors/resource-already-exists-error'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { StudentUseCaseFactory } from '../use-cases/factories/student-use-case-factory'

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  const requestBodySchema = z.object({
    name: z.string(),
    cpf: z.string(),
    birthDate: z.coerce.date(),
    address: z.string(),
  })

  const { name, cpf, birthDate, address } = requestBodySchema.parse(
    request.body,
  )

  const createStudentUseCase = StudentUseCaseFactory.buildCreate()

  try {
    await createStudentUseCase.execute({ name, cpf, birthDate, address })
    reply.status(201).send()
  } catch (error) {
    if (error instanceof ResourceAlreadyExistsError) {
      reply.status(409).send({ message: error.message })
    }
    throw error
  }
}
