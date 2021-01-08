import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository
    .createQueryBuilder('user')
    .innerJoinAndSelect('user.documentId', 'document')
    .innerJoinAndSelect('user.addressId', 'address')
    .innerJoinAndSelect('user.contact', 'contact')
    .innerJoinAndSelect('user.social', 'social')
    .getMany();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      documentId,
      addressId,
      contactId,
      socialId,
    } = request.body;
    const createUser = new CreateUserService();

    const company = await createUser.execute({
      name,
      documentId,
      email,
      password,
      addressId,
      contactId,
      socialId,
    });

    return response.json(company);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
