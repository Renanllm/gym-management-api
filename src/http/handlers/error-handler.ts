import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

export function errorHandler(
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: `Validation error`, issues: error.format() })
  }

  console.error(error.message)
  reply.status(500).send({ message: 'Internal server error' })
}
