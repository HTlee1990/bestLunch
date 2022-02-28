import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../entities/User.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: User) {}

  @Post()
  signIn() {
    console.log('sign-in');
  }
}
