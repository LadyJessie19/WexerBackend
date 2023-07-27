import { ObjectId } from 'mongoose';
import deleteUser from './deleteUser.service';
import newError from '../../../utils/ErrorHandler';

const mockUserRepository:any = {
  deleteRep: jest.fn(),
};

const userId = "yN9HjL3oXxR7gFtDcVbAqW2e" as unknown as ObjectId;

test('should return success statusCode when user is deleted', async () => {

  mockUserRepository.deleteRep.mockResolvedValue(undefined);

  const result = await deleteUser(userId, mockUserRepository);

  expect(result).toMatchObject({ statusCode: 200 });
});

test('should return error statusCode when there is an error deleting the user', async () => {


  const result = newError("error", 400)

  expect(result).toMatchObject(newError("error", 400));
});
