import { Student } from '@prisma/client'
import { StudentsRepository } from '../repositories/students-repository'
import { ResourceAlreadyExistsError } from './errors/resource-already-exists-error'

interface CreateStudentUseCaseArgs {
  name: string
  birthDate: Date
  cpf: string
  address: string
}

interface CreateStudentUseCaseResponse {
  student: Student
}

export class CreateStudentUseCase {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async execute({
    name,
    birthDate,
    cpf,
    address,
  }: CreateStudentUseCaseArgs): Promise<CreateStudentUseCaseResponse> {
    const studentWithSameCpf = await this.studentsRepository.findByCpf(cpf)

    if (studentWithSameCpf) {
      throw new ResourceAlreadyExistsError('Student already exists')
    }

    const student = await this.studentsRepository.create({
      name,
      cpf,
      birth_date: birthDate,
      address,
    })

    return {
      student,
    }
  }
}
