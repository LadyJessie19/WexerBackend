import { ObjectId } from "mongoose"
import PatientModule from "../../PatientModule"
import UserModule from "../../../User/UserModule"
import deletePatient from "../deletePatient.service"

const repository = PatientModule.build().repository
const parentRep = UserModule.build().repository
const id = "64c1707d5db4e52ad77d8458" as unknown as ObjectId
const mock = { key: "value" }

test('should delete the patient by the id', async () => {
    
  const expectedResult = {
    message: "The patient was successfully removed.",
    statusCode: 200
  }

  jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)
  jest.spyOn(repository, 'deleteRep').mockResolvedValue(mock as any)
  jest.spyOn(parentRep, 'pullPatient').mockResolvedValue(mock as any)

  const result = await deletePatient(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return a error when deleting the patient by id', async () => {

  const expectedResult = {
    message: "The patient couldn`t be removed. Please, check the current mongoDB ID.",
    statusCode: 400
  }
  
  jest.spyOn(repository, 'getOneRep').mockResolvedValue(null as any)

  const result = await deletePatient(id, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})