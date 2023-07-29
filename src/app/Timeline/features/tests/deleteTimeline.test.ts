import { ObjectId } from "mongoose"
import TimelineModule from "../../TimelineModule"
import PatientModule from "../../../Patient/PatientModule"
import deleteTimeline from "../deleteTimeline.service"

const repository = TimelineModule.build().repository
const parentRep = PatientModule.build().repository
const id = "64c1707d5db4e52ad77d8458" as unknown as ObjectId
const mock = { key: "value" }

test('should delete the timeline by the id', async () => {
    
  const expectedResult = {
    message: "The timeline was successfully removed.",
    statusCode: 200
  }

  jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)
  jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock as any)
  jest.spyOn(parentRep, 'pullTimeline').mockResolvedValue(mock as any)

  const result = await deleteTimeline(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return a error when deleting the timeline by id', async () => {

  const expectedResult = {
    message: "The timeline couldn`t be removed. Please, check the current mongoDB ID.",
    statusCode: 400
  }
  
  jest.spyOn(repository, 'getOneRep').mockResolvedValue(null as any)

  const result = await deleteTimeline(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})