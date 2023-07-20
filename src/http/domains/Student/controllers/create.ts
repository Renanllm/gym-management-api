import { ResourceAlreadyExistsError } from '@/http/domains/Student/use-cases/errors/resource-already-exists-error'
import { CreateStudentUseCaseFactory } from '@/http/domains/Student/use-cases/factories/create-student-use-case-factory'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

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

  const createStudentUseCase = CreateStudentUseCaseFactory.create()

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
