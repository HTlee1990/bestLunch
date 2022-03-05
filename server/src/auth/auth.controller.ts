import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../entities/User.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('signin')
  signin(@Req() req, @Res({ passthrough: true }) res: Response) {
    return this.AuthService.signinHandler(req.body);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req, @Res({ passthrough: true }) res: Response) {
    return this.AuthService.loginHandler(req.body);
  }
}
