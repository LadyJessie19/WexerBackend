import UserModule from "../UserModule"
import createUser from "./createUser.service"

const repository = UserModule.build().repository

const mock = { email: 'email@email.com', password: '123456', name: 'Someone Someonderson', nickname: 'Mustard' }

test('should create a new user', async () => {

  const expectedResult = {
    message: "Psychologist created with success!",
    statusCode: 201,
    data: mock
  }

  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(undefined as any)
  jest.spyOn(repository, 'findByNicknameRep').mockResolvedValue(undefined as any)
  jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)

  const result = await createUser(mock, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when the email is already being used', async () => {

  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(mock as any)

  const expectedResult = {
    message: 'A psychologist with this email already exists',
    statusCode: 400
  }

  const result = await createUser(mock, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when the nickname is already being used', async () => {
  
  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(null as any)
  jest.spyOn(repository, 'findByNicknameRep').mockResolvedValue(mock as any)

  const expectedResult = {
    message: 'This nickname isn`t available. Try another one, please.',
    statusCode: 400
  }

  const result = await createUser(mock, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when creating the user goes wrong at the database', async () => {

  jest.spyOn(repository, 'findByEmailRep').mockResolvedValue(undefined as any)
  jest.spyOn(repository, 'findByNicknameRep').mockResolvedValue(undefined as any)
  jest.spyOn(repository, 'createRep').mockRejectedValue(null as any)

  const result = await createUser(mock, repository)

  expect(result.statusCode).toBe(400)
})