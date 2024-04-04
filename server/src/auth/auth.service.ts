import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(body: { email: string; username: string; password: string }) {
    let { email, username, password } = body;
    password = await bcrypt.hash(password, 6);
    return await this.userRepository.insert({ email, username, password });
  }
}
