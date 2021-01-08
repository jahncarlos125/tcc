import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cpf: string;

  @Column()
  rg: number;

  @Column({ nullable: true })
  cnh: string;

  @Column({ nullable: true })
  pis: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  reservist: string;
}

export default Document;
