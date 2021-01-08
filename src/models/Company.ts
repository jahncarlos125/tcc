import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import State from './State';

@Entity()
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @ManyToOne(() => State, state => state.company)
  @JoinColumn()
  state: State;

  @Column()
  stateId: string;
}

export default Company;
