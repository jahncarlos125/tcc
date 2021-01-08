import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import AddressRepository from '../repositories/AddressRepository';

const addressesRouter = Router();

addressesRouter.get('/', async (request, response) => {
  const addressRepository = getCustomRepository(AddressRepository);
  const address = await addressRepository.find();

  return response.json(address);
});

export default addressesRouter;
