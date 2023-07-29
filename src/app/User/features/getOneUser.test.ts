import getOneUser from './getOneUser.service';
import UserModule from '../UserModule';
import { ObjectId } from 'mongoose';

const repository = UserModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should return success object with paginated data', async () => {

    const mock = {
        message: 'Psychologist was successfully found.',
        statusCode: 200
    }
    
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)

    const result = await getOneUser(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});

test('shouldn`t return any result', async () => {

    const mock = {
        message: `The psychologist with the id ${id} wasn't found.`,
        statusCode: 404
    }
    
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(undefined as any)

    const result = await getOneUser(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});