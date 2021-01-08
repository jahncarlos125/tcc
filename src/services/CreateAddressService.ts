import { getCustomRepository } from 'typeorm';

import Address from '../models/Address';
import AddressRepository from '../repositories/AddressRepository';

interface Request {
  street: string;
  number: number;
  neighboard: string;
  city: string;
  stateId: string;
  primary: boolean;
}

class CreateAddressService {
  public async execute({
    street,
    number,
    neighboard,
    city,
    stateId,
    primary,
  }: Request): Promise<Address> {
    const addressRepository = getCustomRepository(AddressRepository);

    const address = addressRepository.create({
      street,
      number,
      neighboard,
      city,
      primary,
      stateId,
    });

    await addressRepository.save(address);

    return address;
  }
}

export default CreateAddressService;
