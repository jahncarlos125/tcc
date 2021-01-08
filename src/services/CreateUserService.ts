import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  documentId: string;
  email: string;
  password: string;
  addressId: string;
  contactId: string;
  socialId: string;
}

class CreateUserService {
  public async execute({
    name,
    documentId,
    email,
    password,
    addressId,
    contactId,
    socialId,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const findUserWithSameEmail = await usersRepository.findOne({
      where: {
        email,
      },
    });

    if (findUserWithSameEmail) {
      throw new AppError('This user is already booked', 409);
    }

    const user = usersRepository.create({
      name,
      documentId,
      email,
      password,
      addressId,
      contactId,
      socialId,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
