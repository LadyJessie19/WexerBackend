import { ObjectId } from "mongoose"
import FileModule from "../../FileModule"
import OccurrenceModule from "../../../Occurrence/OccurrenceModule"
import deleteFile from "../deleteFile.service"

const repository = FileModule.build().repository
const parentRep = OccurrenceModule.build().repository
const id = "64c1707d5db4e52ad77d8458" as unknown as ObjectId
const mock = { key: "value" }

test('should delete the file by the id', async () => {
    
  const expectedResult = {
    message: "The file was successfully removed.",
    statusCode: 200
  }

  jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)
  jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock as any)
  jest.spyOn(parentRep, 'pullFile').mockResolvedValue(mock as any)

  const result = await deleteFile(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return a error when deleting the file by id', async () => {

  const expectedResult = {
    message: "The file couldn`t be removed. Please, check the current mongoDB ID.",
    statusCode: 400
  }
  
  jest.spyOn(repository, 'getOneRep').mockResolvedValue(null as any)

  const result = await deleteFile(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})