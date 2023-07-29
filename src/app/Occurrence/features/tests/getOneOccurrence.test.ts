import getOneOccurrence from '../getOneOccurrence.service';
import OccurrenceModule from '../../OccurrenceModule';
import { ObjectId } from 'mongoose';

const repository = OccurrenceModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId


test('should return one item from occurrence collection', async () => {

    const mock = {
        message: 'The occurrence was successfully found.',
        statusCode: 200
    }
    
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)

    const result = await getOneOccurrence(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});

test('shouldn`t return any occurrence', async () => {

    const mock = {
        message: `The occurrence with the id ${id} wasn't found.`,
        statusCode: 404
    }
    
    jest.spyOn(repository, 'getOneRep').mockReturnValue(undefined as any)

    const result = await getOneOccurrence(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});