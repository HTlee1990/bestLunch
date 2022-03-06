import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private configService: ConfigService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findOne(username);
      await this.validatePassword(pass, user.password);
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new HttpException(
        '로그인정보를 확인해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async validatePassword(plainPassword: string, hashed: string) {
    const matched = await bcrypt.compare(plainPassword, hashed);
    console.log('matched ???', matched);
    if (!matched) {
      throw new HttpException(
        '비밀번호를 확인해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getAccessToken(user) {
    try {
      const token = this.jwtService.sign(user);
      const expire_date = this.configService.get('ACCESS_TOKEN_EXPIRES');

      return {
        accessToken: token,
        path: '/',
        sameSite: false,
        maxAge: expire_date * 1000,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getRefreshToken(user) {
    try {
      const token = this.jwtService.sign(user);
      const expire_date = this.configService.get('REFRESH_TOKEN_EXPIRES');

      return {
        refreshToken: token,
        path: '/',
        sameSite: false,
        maxAge: expire_date * 1000,
      };
    } catch (error) {
      console.log(error);
    }
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
}
