import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Address from './Address';
import Contact from './Contact';
import Document from './Document';
import Social from './Social';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Address)
  @JoinColumn()
  addressId: Address;

  @OneToOne(() => Document)
  @JoinColumn()
  documentId: Document;

  @ManyToOne(() => Contact, contact => contact.user)
  @JoinColumn()
  contact: Contact;

  @Column({ select: false, nullable: true })
  contactId: string;

  @ManyToOne(() => Social, social => social.user)
  @JoinColumn()
  social: Social;

  @Column({ select: false, nullable: true })
  socialId: string;
}

export default User;
