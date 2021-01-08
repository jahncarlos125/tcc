import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cpf: string;

  @Column()
  rg: number;

  @Column()
  cnh: string;

  @Column()
  pis: string;

  @Column()
  title: string;

  @Column()
  reservist: string;
}

export default Document;
