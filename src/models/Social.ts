import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import User from './User';

@Entity('social')
class Social {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  facebook: string;

  @Column()
  instagram: string;

  @Column()
  linkedin: string;

  @Column()
  github: string;

  @OneToMany(() => User, user => user.social, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  user: User;
}

export default Social;
