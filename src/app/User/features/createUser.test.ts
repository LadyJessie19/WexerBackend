import { ServiceUserDTO } from '../UserDTO';
import createUser from './createUser.service';

const mockUserRepository:any = {
  findByEmailRep: jest.fn(),
  createRep: jest.fn(),
};

test('should create a new user', async () => {

  const payload: ServiceUserDTO = {
    name: "Someone Someonderson",
    email: 'test@example.com',
    password: 'password123',
    patients: [],
    image: {filename: 'something', mimetype: 'something'}
  };

  mockUserRepository.findByEmailRep.mockResolvedValue(null);

  mockUserRepository.createRep.mockResolvedValue({ id: '1', ...payload });

  const result = await createUser(payload, mockUserRepository);

  expect(result.message).toBe("Psychologist created with success!");
  expect(result.statusCode).toBe(201);
  expect(mockUserRepository.findByEmailRep).toHaveBeenCalledWith('test@example.com');
});

test('should return an error if user already exists', async () => {

    const payload: ServiceUserDTO = {
        name: "Someone Someonderson",
        email: 'existing@example.com',
        password: 'password123',
        patients: [],
        image: {filename: 'something', mimetype: 'something'}
    };

  mockUserRepository.findByEmailRep.mockResolvedValue({ id: '1', ...payload });

  const result = await createUser(payload, mockUserRepository);

  expect(result.statusCode).toBe(400);
  expect(result.message).toBe('A psychologist with this email already exists');
  expect(mockUserRepository.findByEmailRep).toHaveBeenCalledWith('existing@example.com');
});

test('should return an error on user creation error', async () => {

  const payload: ServiceUserDTO = {
    name: "Someone Someonderson",
    email: 'test@example.com',
    password: 'password123',
    patients: [],
    image: {filename: 'something', mimetype: 'something'}
  };

  mockUserRepository.createRep.mockRejectedValue(new Error('Database error'));

  const result = await createUser(payload, mockUserRepository);

  expect(result.statusCode).toBe(400);
});
