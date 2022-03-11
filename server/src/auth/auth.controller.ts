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
import { RefreshAuthGuard } from './jwt-refresh.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from 'src/strategies/skip-auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Public()
  @Post('signin')
  async signin(@Req() req, @Res({ passthrough: true }) res: Response) {
    const result = await this.AuthService.signinHandler(req.body);
    return result;
  }

  @Public()
  // @UseGuards(JwtAuthGuard)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res({ passthrough: true }) res: Response) {
    console.log('login', req.headers, req.cookise);
    const { accessToken, ...options } = await this.AuthService.getAccessToken(
      req.user,
    );
    const { refreshToken, ...RToptions } =
      await this.AuthService.getRefreshToken(req.user);
    res.cookie('logined', true);
    res.cookie('Authentication', accessToken, options);
    res.cookie('Refresh', refreshToken, RToptions);
    return {
      code: 200,
      message: '로그인 성공',
      data: 'logined',
    };
  }

  @Public()
  @Get('access_token')
  async getAT(@Req() req) {
    console.log('access_token', req.headers);
  }
}
