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
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('signin')
  signin(@Req() req, @Res({ passthrough: true }) res: Response) {
    return this.AuthService.signinHandler(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res({ passthrough: true }) res: Response) {
    console.log('login', req.headers);
    const { accessToken, ...options } = await this.AuthService.loginHandler(
      req.user,
    );
    console.log('set', accessToken);
    res.cookie('Authentication', accessToken, options);
    return {
      code: 20000,
      message: '로그인 성공',
      data: 'logined',
    };
  }
}
