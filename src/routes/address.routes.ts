import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import AddressRepository from '../repositories/AddressRepository';
import CreateAddressService from '../services/CreateAddressService';

const addressesRouter = Router();

addressesRouter.get('/', async (request, response) => {
  const addressRepository = getCustomRepository(AddressRepository);
  const address = await addressRepository.find();

  return response.json(address);
});

addressesRouter.post('/', async (request, response) => {
  try {
    const { street, number, neighboard, city, stateId, primary } = request.body;
    const createAddress = new CreateAddressService();

    const address = await createAddress.execute({
      street,
      number,
      neighboard,
      city,
      stateId,
      primary,
    });

    return response.json(address);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default addressesRouter;
