import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { StudentsRepository } from '../students-repository'

export class PrismaStudentsRepository implements StudentsRepository {
  async findByCpf(cpf: string) {
    return await prisma.student.findUnique({
      where: {
        cpf,
      },
    })
  }

  // async findById(id: string) {
  //   return await prisma.user.findUnique({
  //     where: {
  //       id,
  //     },
  //   })
  // }

  async create(data: Prisma.StudentCreateInput) {
    return await prisma.student.create({
      data,
    })
  }
}
