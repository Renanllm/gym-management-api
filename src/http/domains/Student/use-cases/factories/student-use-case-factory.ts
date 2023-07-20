import { PrismaStudentsRepository } from '@/http/domains/Student/repositories/prisma/prisma-students-repository'
import { CreateStudentUseCase } from '../create-student'
import { GetAllStudentsUseCase } from '../get-all-students'

const prismaStudentsRepository = new PrismaStudentsRepository()

export class StudentUseCaseFactory {
  static buildCreate() {
    return new CreateStudentUseCase(prismaStudentsRepository)
  }

  static buildGetAll() {
    return new GetAllStudentsUseCase(prismaStudentsRepository)
  }
}
