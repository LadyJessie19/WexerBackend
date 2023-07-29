import getOneTimeline from '../getOneTimeline.service';
import TimelineModule from '../../TimelineModule';
import { ObjectId } from 'mongoose';

const repository = TimelineModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should return one item from timeline collection', async () => {

    const mock = {
        message: 'The timeline was successfully found.',
        statusCode: 200
    }
    
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)

    const result = await getOneTimeline(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});

test('shouldn`t return any timeline', async () => {

    const mock = {
        message: `The timeline with the id ${id} wasn't found.`,
        statusCode: 404
    }
    
    jest.spyOn(repository, 'getOneRep').mockReturnValue(undefined as any)

    const result = await getOneTimeline(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});