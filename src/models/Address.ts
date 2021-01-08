import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import State from './State';

@Entity()
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  neighboard: string;

  @Column()
  city: string;

  @Column()
  primary: boolean;

  @ManyToOne(() => State, state => state.company)
  @JoinColumn()
  state: State;

  @Column()
  stateId: string;
}

export default Address;
