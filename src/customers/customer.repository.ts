/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

export class CustomerRepository extends Repository<Customer> {
  constructor(
    @InjectRepository(Customer)
    private userRepository: Repository<Customer>,
    private jwtService: JwtService,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }
}
