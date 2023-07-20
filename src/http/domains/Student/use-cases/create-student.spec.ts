import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryStudentsRepository } from '../repositories/in-memory/in-memory-students-repository'
import { CreateStudentUseCase } from './create-student'
import { ResourceAlreadyExistsError } from './errors/resource-already-exists-error'

describe('Create Student Use Case', () => {
  let suv: CreateStudentUseCase

  beforeEach(() => {
    const studentsRepository = new InMemoryStudentsRepository()
    suv = new CreateStudentUseCase(studentsRepository)
  })

  it('should be able to register a new student', async () => {
    const { student } = await suv.execute({
      name: 'John Doe',
      birthDate: new Date(),
      cpf: '12345678910',
      address: 'Rua 1',
    })
    expect(student.id).toEqual(expect.any(String))
  })

  it('should not be able to register a new student with an cpf already in use', async () => {
    await suv.execute({
      name: 'John Doe',
      birthDate: new Date(),
      cpf: '12345678910',
      address: 'Rua 1',
    })

    await expect(() =>
      suv.execute({
        name: 'John Doe',
        birthDate: new Date(),
        cpf: '12345678910',
        address: 'Rua 1',
      }),
    ).rejects.toBeInstanceOf(ResourceAlreadyExistsError)
  })
})
