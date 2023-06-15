import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './customer.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
