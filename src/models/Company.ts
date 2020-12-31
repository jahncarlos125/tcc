import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  company_id: string;

  @Column()
  company_name: string;

  @Column()
  company_document: string;

  @Column()
  company_email: string;

  @Column()
  company_password: string;

  @Column()
  company_token: string;
}

export default Company;
