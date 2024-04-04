import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubDto } from './dto/create-sub.dto';
import { UpdateSubDto } from './dto/update-sub.dto';
import Sub from './entities/sub.entity';

@Injectable()
export class SubService {
  constructor(@InjectRepository(Sub) private subRepository: Repository<Sub>) {}
  create(createSubDto: CreateSubDto) {
    return 'This action adds a new sub';
  }

  findAll() {
    return this.subRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sub`;
  }

  update(id: number, updateSubDto: UpdateSubDto) {
    return `This action updates a #${id} sub`;
  }

  remove(id: number) {
    return `This action removes a #${id} sub`;
  }
}
