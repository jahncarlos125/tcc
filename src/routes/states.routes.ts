import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import StatesRepository from '../repositories/StatesRepository';

const statesRouter = Router();

statesRouter.get('/', async (request, response) => {
  const statesRepository = getCustomRepository(StatesRepository);
  const states = await statesRepository.find({ relations: ['company'] });

  return response.json(states);
});

export default statesRouter;
