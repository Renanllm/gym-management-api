import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryStudentsRepository } from '../repositories/in-memory/in-memory-students-repository'
import { GetAllStudentsUseCase } from './get-all-students'

describe('Get All Students Use Case', () => {
  let suv: GetAllStudentsUseCase
  let studentsRepository: InMemoryStudentsRepository

  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    suv = new GetAllStudentsUseCase(studentsRepository)
  })

  it('should be able to get all students when there are some created', async () => {
    studentsRepository.create({
      name: 'John Doe',
      birth_date: new Date(),
      cpf: '12345678910',
      address: 'Rua 1',
    })

    const { students } = await suv.execute()
    expect(students.length).toEqual(1)
    expect(students[0].name).toEqual('John Doe')
  })
})
