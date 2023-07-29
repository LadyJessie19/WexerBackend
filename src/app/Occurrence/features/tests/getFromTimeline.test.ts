import getFromTimeline from '../getFromTimeline.service';
import OccurrenceModule from '../../OccurrenceModule';
import { ObjectId } from 'mongoose';

const repository = OccurrenceModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

const mock = {
    message: 'Data fetched successfully',
    statusCode: 200,
    pageInfo: { currentPage: 1, totalPages: 3, hasNextPage: true },
    result: [{ id: '1', name: 'item 1' }, { id: '2', name: 'item 2' }],
}

test('should return the occurrences from the choosen id', async () => {
    const page = 1
    const limit = 2

    jest.spyOn(repository, 'getFromParentRep').mockResolvedValue(mock as any)

    const result = await getFromTimeline(id, page, limit, repository);

    expect(result.statusCode).toBe(mock.statusCode);
});