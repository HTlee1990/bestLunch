import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { User } from '../entities/User.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('signIn')
  signIn(@Req() req, @Res({ passthrough: true }) res: Response) {
    return this.AuthService.signInHandler(req.body);
  }
}
