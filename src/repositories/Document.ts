import { EntityRepository, Repository } from 'typeorm';
import Document from '../models/Document';

@EntityRepository(Document)
class DocumentsRepository extends Repository<Document> {}

export default DocumentsRepository;
