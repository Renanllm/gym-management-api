import { PrismaStudentsRepository } from '@/http/domains/Student/repositories/prisma/prisma-students-repository'
import { GetAllStudentsUseCase } from '../get-all-students'

export class GetAllStudentsUseCaseFactory {
  static create() {
    const prismaStudentsRepository = new PrismaStudentsRepository()
    const getAllStudentsUseCase = new GetAllStudentsUseCase(
      prismaStudentsRepository,
    )

    return getAllStudentsUseCase
  }
}
