import { ObjectId } from "mongoose"
import OccurrenceModule from "../../OccurrenceModule"
import updateOccurrence from "./../updateOccurrence.service"
import { CreateOccurrenceDTO } from "../../OccurrenceDTO"

const repository = OccurrenceModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should update the Occurrence by the id', async () => {
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
    message: "The occurrence was successfully updated!",
    statusCode: 200
  }

  const body = { key: "value" } as unknown as CreateOccurrenceDTO

  jest.spyOn(repository, 'updateRep').mockResolvedValue(mock as any)

  const result = await updateOccurrence(id, body, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})