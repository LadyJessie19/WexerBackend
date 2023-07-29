import { OccurrenceWithTimelineIdDTO } from "../../OccurrenceDTO"
import TimelineModule from "../../../Timeline/TimelineModule"
import OccurrenceModule from "../../OccurrenceModule"
import createOccurrence from "../createOccurrence.service"

const repository = OccurrenceModule.build().repository
const parentRep = TimelineModule.build().repository

const mock = { key: "value" } as unknown as OccurrenceWithTimelineIdDTO

test('should create a new occurrence', async () => {

  const expectedResult = {
    message: "The occurrence was created with success!",
    statusCode: 201,
    data: mock
  }

  jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)
  jest.spyOn(parentRep, 'pushOccurrence').mockResolvedValue(mock as any)

  const result = await createOccurrence(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when creating the occurrence', async () => {

  const expectedResult = {
    statusCode: 400,
    message: "Could not create occurrence."
  }

  jest.spyOn(repository, 'createRep').mockReturnValue(undefined as any)

  const result = await createOccurrence(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})