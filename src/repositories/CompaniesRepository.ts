import { EntityRepository, Repository } from 'typeorm';
import Company from '../models/Company';

@EntityRepository(Company)
class CompaniesRepository extends Repository<Company> {}

export default CompaniesRepository;
