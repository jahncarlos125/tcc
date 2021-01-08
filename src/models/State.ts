import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Company from './Company';

@Entity('states')
class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  region: string;

  @OneToMany(() => Company, company => company.state, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  company: Company;
}

export default State;
