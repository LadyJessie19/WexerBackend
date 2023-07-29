import getOneFile from '../getOneFile.service';
import FileModule from '../../FileModule';
import { ObjectId } from 'mongoose';

const repository = FileModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId

test('should return one item from file collection', async () => {

    const mock = {
        message: 'The file was successfully found.',
        statusCode: 200
    }
    
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)

    const result = await getOneFile(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});

test('shouldn`t return any file', async () => {

    const mock = {
        message: `The file with the id ${id} wasn't found.`,
        statusCode: 404
    }
    
    jest.spyOn(repository, 'getOneRep').mockReturnValue(undefined as any)

    const result = await getOneFile(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});