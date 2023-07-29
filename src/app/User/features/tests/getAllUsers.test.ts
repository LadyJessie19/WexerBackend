import getAllUsers from './../getAllUsers.service';
import UserModule from '../../UserModule';

const repository = UserModule.build().repository

const mock = {
    message: 'Data fetched successfully',
    statusCode: 200,
    pageInfo: { currentPage: 1, totalPages: 3, hasNextPage: true },
    result: [{ id: '1', name: 'Psychologist 1' }, { id: '2', name: 'Psychologist 2' }],
}

test('should return success object with paginated data', async () => {
    const page = 1
    const limit = 2

    jest.spyOn(repository, 'getAllRep').mockResolvedValue(mock as any)

    const result = await getAllUsers(page, limit, repository);

    expect(result.statusCode).toBe(mock.statusCode);
});