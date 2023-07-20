import { Student } from '@prisma/client'
import { StudentsRepository } from '../repositories/students-repository'

type GetAllStudentsUseCaseResponse = {
  students: Student[]
}

export class GetAllStudentsUseCase {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async execute(): Promise<GetAllStudentsUseCaseResponse> {
    const students = await this.studentsRepository.findAll()

    return { students }
  }
}
