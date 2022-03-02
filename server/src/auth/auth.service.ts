import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async signInHandler(body: User) {
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
      await this.userRepository.insert(body);

      return body;
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
}
