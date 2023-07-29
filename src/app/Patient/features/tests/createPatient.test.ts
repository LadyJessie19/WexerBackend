import { PatientWithUserIdDTO } from "../../PatientDTO"
import UserModule from "../../../User/UserModule"
import PatientModule from "../../PatientModule"
import createPatient from "../createPatient.service"

const repository = PatientModule.build().repository
const parentRep = UserModule.build().repository

const mock = { key: "value" } as unknown as PatientWithUserIdDTO

test('should create a new patient', async () => {

  const expectedResult = {
    message: "The patient was created with success!",
    statusCode: 201,
    data: mock
  }

  jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)
  jest.spyOn(parentRep, 'pushPatient').mockResolvedValue(mock as any)

  const result = await createPatient(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when creating the patient', async () => {

  const expectedResult = {
    statusCode: 400,
    message: "Could not create patient."
  }

  jest.spyOn(repository, 'createRep').mockReturnValue(undefined as any)

  const result = await createPatient(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})