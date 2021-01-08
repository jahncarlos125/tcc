import { EntityRepository, Repository } from 'typeorm';
import Contact from '../models/Contact';

@EntityRepository(Contact)
class ContactsRepository extends Repository<Contact> {}

export default ContactsRepository;
