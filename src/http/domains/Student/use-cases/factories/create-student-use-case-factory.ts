import { PrismaStudentsRepository } from '@/http/domains/Student/repositories/prisma/prisma-students-repository'
import { CreateStudentUseCase } from '../create-student'

export class CreateStudentUseCaseFactory {
  static create() {
    const prismaStudentsRepository = new PrismaStudentsRepository()
    const createStudentUseCase = new CreateStudentUseCase(
      prismaStudentsRepository,
    )

    return createStudentUseCase
  }
}
