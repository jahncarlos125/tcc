import { EntityRepository, Repository } from 'typeorm';
import State from '../models/State';

@EntityRepository(State)
class StatesRepository extends Repository<State> {}

export default StatesRepository;
