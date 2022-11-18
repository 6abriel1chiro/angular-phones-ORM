import { Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(Phone) private phoneRepository: Repository<Phone>){}
  create(createPhoneDto: CreatePhoneDto) {
    return this.phoneRepository.save(createPhoneDto);
  }

  findAll() {
    return this.phoneRepository.find();
  }

  findOne(id: string) {
    return this.phoneRepository.findOne({ where: { id: parseInt(id) } });
  }

  update(id: string, updatePhoneDto: UpdatePhoneDto) {
    return this.phoneRepository.update(id, updatePhoneDto);
  }

  remove(id: string) {
    return this.phoneRepository.delete({ id: parseInt(id) });
  }
}
