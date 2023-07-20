import { Prisma, Student } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { StudentsRepository } from '../students-repository'

export class InMemoryStudentsRepository implements StudentsRepository {
  private students: Student[] = []

  async findByCpf(cpf: string) {
    const student = this.students.find((student) => student.cpf === cpf)
    return student ?? null
  }

  async findAll() {
    return this.students
  }

  async create(data: Prisma.StudentCreateInput) {
    const student = {
      id: randomUUID(),
      name: data.name,
      cpf: data.cpf,
      birth_date: new Date(data.birth_date),
      address: data.address,
      created_at: new Date(),
    }
    this.students.push(student)
    return student
  }
}
