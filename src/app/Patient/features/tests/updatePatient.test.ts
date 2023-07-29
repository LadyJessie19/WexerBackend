import { ObjectId } from "mongoose"
import PatientModule from "../../PatientModule"
import updatePatient from "./../updatePatient.service"
import { CreatePatientDTO } from "../../PatientDTO"

const repository = PatientModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should update the Patient by the id', async () => {
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
    message: "The patient was successfully updated!",
    statusCode: 200
  }

  const body = { key: "value" } as unknown as CreatePatientDTO

  jest.spyOn(repository, 'updateRep').mockResolvedValue(mock as any)

  const result = await updatePatient(id, body, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})