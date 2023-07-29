import { ObjectId } from "mongoose"
import OccurrenceModule from "../../OccurrenceModule"
import TimelineModule from "../../../Timeline/TimelineModule"
import deleteOccurrence from "../deleteOccurrence.service"

const repository = OccurrenceModule.build().repository
const parentRep = TimelineModule.build().repository
const id = "64c1707d5db4e52ad77d8458" as unknown as ObjectId
const mock = { key: "value" }

test('should delete the occurrence by the id', async () => {
    
  const expectedResult = {
    message: "The occurrence was successfully removed.",
    statusCode: 200
  }

  jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)
  jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock as any)
  jest.spyOn(parentRep, 'pullOccurrence').mockResolvedValue(mock as any)

  const result = await deleteOccurrence(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return a error when deleting the occurrence by id', async () => {

  const expectedResult = {
    message: "The occurrence couldn`t be removed. Please, check the current mongoDB ID.",
    statusCode: 400
  }
  
  jest.spyOn(repository, 'getOneRep').mockResolvedValue(null as any)

  const result = await deleteOccurrence(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})