import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import User from './User';

@Entity()
class Social {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  github: string;

  @OneToMany(() => User, user => user.social, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  user: User;
}

export default Social;
