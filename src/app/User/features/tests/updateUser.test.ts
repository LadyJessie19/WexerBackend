import { ObjectId } from "mongoose"
import UserModule from "../../UserModule"
import updateUser from "./../updateUser.service"
import { CreateUserDTO } from "../../UserDTO"

const repository = UserModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should update the user by the id', async () => {
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
    message: "The psychologist was successfully updated!",
    statusCode: 200
  }

  const body = { key: "value" } as unknown as CreateUserDTO

  jest.spyOn(repository, 'updateRep').mockResolvedValue(mock as any)

  const result = await updateUser(id, body, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})