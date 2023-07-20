import { Prisma, Student } from '@prisma/client'

export interface StudentsRepository {
  create: (data: Prisma.StudentCreateInput) => Promise<Student>
  findAll: () => Promise<Student[]>
  findByCpf: (cpf: string) => Promise<Student | null>
}
