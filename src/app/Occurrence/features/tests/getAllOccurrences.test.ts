import getAllOccurrences from './../getAllOccurrences.service';
import OccurrenceModule from '../../OccurrenceModule';

const repository = OccurrenceModule.build().repository

const mock = {
    message: 'Data fetched successfully',
    statusCode: 200,
    pageInfo: { currentPage: 1, totalPages: 3, hasNextPage: true },
    result: [{ id: '1', name: 'item 1' }, { id: '2', name: 'item 2' }],
}

test('should return an occurrences object with paginated data', async () => {
    const page = 1
    const limit = 2

    jest.spyOn(repository, 'getAllRep').mockResolvedValue(mock as any)

    const result = await getAllOccurrences(page, limit, repository);

    expect(result.statusCode).toBe(mock.statusCode);
});