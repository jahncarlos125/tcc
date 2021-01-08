import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CompaniesRepository from '../repositories/CompaniesRepository';
import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();

companiesRouter.get('/', async (request, response) => {
  const companiesRepository = getCustomRepository(CompaniesRepository);
  const companies = await companiesRepository.find({ relations: ['state'] });

  return response.json(companies);
});

companiesRouter.post('/', async (request, response) => {
  try {
    const { name, document, email, password, token, stateId } = request.body;
    const createCompany = new CreateCompanyService();

    const company = await createCompany.execute({
      name,
      document,
      email,
      password,
      token,
      stateId,
    });

    return response.json(company);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default companiesRouter;
