import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('getInfo')
  getUserInfo(@Req() req, @Res({ passthrough: true }) res) {
    return req.user;
  }
}
