import UserModule from "../UserModule"
import createUser from "./createUser.service"

const repository = UserModule.build().repository

test('should create a new user', async () => {
  const mock = { email: 'email@email.com', password: '123456', name: 'Someone Someonderson'}

  const expectedResult = {
    message: "Psychologist created with success!",
    statusCode: 201,
    data: mock
  }

  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(undefined as any)
  jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)

  const result = await createUser(mock, repository)

  expect(result.statusCode).toBe(201)
})

/* test('should return a error when creating the user', async () => {
  const mock = { email: 'email@email.com', password: '123456', name: 'Someone Someonderson'}
  
  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(mock as any)
  // jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)

}) */