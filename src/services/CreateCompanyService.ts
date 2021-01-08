import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';

interface Request {
  name: string;
  document: string;
  email: string;
  password: string;
  token: string;
  stateId: string;
}

class CreateCompanyService {
  public async execute({
    name,
    document,
    email,
    password,
    token,
    stateId,
  }: Request): Promise<Company> {
    const companiesRepository = getCustomRepository(CompaniesRepository);

    const findCompanyWithSameEmail = await companiesRepository.findOne({
      where: {
        company_email: email,
      },
    });

    if (findCompanyWithSameEmail) {
      throw new AppError('This company is already booked', 409);
    }

    const company = companiesRepository.create({
      company_name: name,
      company_document: document,
      company_email: email,
      company_password: password,
      company_token: token,
      state_id: stateId,
    });

    await companiesRepository.save(company);

    return company;
  }
}

export default CreateCompanyService;
