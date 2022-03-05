import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private usersService: UsersService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const matched = await bcrypt.compare(pass, user.password);
    if (matched) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signinHandler(body: User) {
    try {
      const existingUser = await this.userRepository.findOne({ id: body.id });
      if (existingUser) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            message: '이미 존재하는 아이디 입니다.',
          },
          400,
        );
      }
      const hashed = await bcrypt.hash(body.password, 10);
      const newUser = { ...body, password: hashed };
      await this.userRepository.insert(newUser);
      return newUser;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        },
        400,
      );
    }
  }

  async loginHandler(body) {
    try {
      console.log('loginHandler');
      const res = await this.userRepository.findOne({ id: body.id });
      const matched = await bcrypt.compare(body.password, res.password);
      if (matched) {
      }
    } catch (error) {}
  }
}
