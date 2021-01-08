import { EntityRepository, Repository } from 'typeorm';
import Address from '../models/Address';

@EntityRepository(Address)
class AdressesRepository extends Repository<Address> {}

export default AdressesRepository;
