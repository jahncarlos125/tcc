import { v4 as uuidv4 } from 'uuid';

class Company {
  company_id: string;

  company_name: string;

  company_document: string;

  company_email: string;

  company_password: string;

  company_token: string;

  constructor({
    company_name,
    company_document,
    company_email,
    company_password,
    company_token,
  }: Omit<Company, 'company_id'>) {
    this.company_id = uuidv4();
    this.company_name = company_name;
    this.company_document = company_document;
    this.company_email = company_email;
    this.company_password = company_password;
    this.company_token = company_token;
  }
}

export default Company;
