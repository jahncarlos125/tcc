import { EntityRepository, Repository } from 'typeorm';
import Social from '../models/Social';

@EntityRepository(Social)
class SocialsRepository extends Repository<Social> {}

export default SocialsRepository;
