import { TimelineWithPatientIdDTO } from "../../TimelineDTO"
import PatientModule from "../../../Patient/PatientModule"
import TimelineModule from "../../TimelineModule"
import createTimeline from "../createTimeline.service"

const repository = TimelineModule.build().repository
const parentRep = PatientModule.build().repository

const mock = { key: "value" } as unknown as TimelineWithPatientIdDTO

test('should create a new timeline', async () => {

  const expectedResult = {
    message: "The timeline was created with success!",
    statusCode: 201,
    data: mock
  }

  jest.spyOn(repository, 'createRep').mockResolvedValue(expectedResult as any)
  jest.spyOn(parentRep, 'pushTimeline').mockResolvedValue(mock as any)

  const result = await createTimeline(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})

test('should return an error when creating the timeline', async () => {

  const expectedResult = {
    statusCode: 400,
    message: "Could not create timeline."
  }

  jest.spyOn(repository, 'createRep').mockReturnValue(undefined as any)

  const result = await createTimeline(mock, repository, parentRep)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})