import { ObjectId } from "mongoose"
import UserModule from "../../UserModule"
import deleteUser from "./../deleteUser.service"

const repository = UserModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should delete the user by the id', async () => {
    const mock = {
        _id: '',
        name: '',
        nickname: '',
        email: '',
        patients: [],
        createdAt: '',
        updatedAt: '',
        __v: 0
    }

   const expectedResult = {
    message: "The psychologist was successfully removed.",
    statusCode: 200
  }

  jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock as any)

  const result = await deleteUser(id, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return a error when deleting the user by id', async () => {

  const expectedResult = {
    message: "The psychologist couldn`t be removed. Please, check the current mongoDB ID.",
    statusCode: 400
  }
  
  jest.spyOn(repository, 'deleteRep').mockResolvedValue(null)

  const result = await deleteUser(id, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})