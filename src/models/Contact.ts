import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import User from './User';

@Entity()
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  number: number;

  @Column()
  ddd: string;

  @OneToMany(() => User, user => user.contact, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  user: User;
}

export default Contact;
