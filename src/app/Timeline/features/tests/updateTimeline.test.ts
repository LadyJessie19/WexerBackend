import { ObjectId } from "mongoose"
import TimelineModule from "../../TimelineModule"
import updateTimeline from "../updateTimeline.service"
import { CreateTimelineDTO } from "../../TimelineDTO"

const repository = TimelineModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should update the Timeline by the id', async () => {
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
    message: "The timeline was successfully updated!",
    statusCode: 200
  }

  const body = { key: "value" } as unknown as CreateTimelineDTO

  jest.spyOn(repository, 'updateRep').mockResolvedValue(mock as any)

  const result = await updateTimeline(id, body, repository)

  expect(result.statusCode).toBe(expectedResult.statusCode)
  expect(result.message).toBe(expectedResult.message)
})