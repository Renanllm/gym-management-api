import { Prisma, Student } from '@prisma/client'

export interface StudentsRepository {
  create: (data: Prisma.StudentCreateInput) => Promise<Student>
  findByCpf: (cpf: string) => Promise<Student | null>
}
