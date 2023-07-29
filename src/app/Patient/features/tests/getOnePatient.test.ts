import getOnePatient from '../getOnePatient.service';
import PatientModule from '../../PatientModule';
import { ObjectId } from 'mongoose';

const repository = PatientModule.build().repository
const id = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId


test('should return one item from patient collection', async () => {

    const mock = {
        message: 'The pacient was successfully found.',
        statusCode: 200
    }
    
    jest.spyOn(repository, 'getOneRep').mockResolvedValue(mock as any)

    const result = await getOnePatient(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});

test('shouldn`t return any patient', async () => {

    const mock = {
        message: `The patient with the id ${id} wasn't found.`,
        statusCode: 404
    }
    
    jest.spyOn(repository, 'getOneRep').mockReturnValue(undefined as any)

    const result = await getOnePatient(id, repository);

    expect(result.statusCode).toBe(mock.statusCode);
    expect(result.message).toBe(mock.message);
});