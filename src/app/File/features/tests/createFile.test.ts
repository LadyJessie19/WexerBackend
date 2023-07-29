import { FileWithOccurrenceIdDTO } from "../../FileDTO"
import OccurrenceModule from "../../../Occurrence/OccurrenceModule"
import FileModule from "../../FileModule"
import createFile from "../createFile.service"

const repository = FileModule.build().repository
const parentRep = OccurrenceModule.build().repository

const mock = { key: "value" } as unknown as FileWithOccurrenceIdDTO

test('should create a new file', async () => {

  const expectedResult = {
    message: "The file was created with success!",
    statusCode: 201,
    data: mock
  }

  jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)
  jest.spyOn(parentRep, 'pushFile').mockResolvedValue(mock as any)

  const result = await createFile(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when creating the file', async () => {

  const expectedResult = {
    statusCode: 400,
    message: "Could not create file."
  }

  jest.spyOn(repository, 'createRep').mockReturnValue(undefined as any)

  const result = await createFile(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})