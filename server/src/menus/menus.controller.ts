import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { MenusService } from './menus.service';
import { Lunch } from '../entities/lunchLists.entity';
import * as dayjs from 'dayjs';

@Controller('menus')
export class MenusController {
  constructor(private readonly MenusService: MenusService) {}

  @Get()
  saySth(@Req() req, @Res({ passthrough: true }) res): Promise<Lunch[]> {
    let { category, rice, distance } = req.query;

    if (category.length === 0) category = null;
    if (rice.length === 0) rice = null;
    if (distance.length === 0) distance = null;

    if (!category && !rice && !distance) return this.MenusService.findAll();
    else return this.MenusService.findSome(category, rice, distance);
  }

  @Post()
  addMenu(
    @Body()
    menu: {
      name: string;
      category: string;
      menu: string;
      isNoodle: string;
      distance: string;
    },
  ) {
    return this.MenusService.addMenu(menu);
  }

  @Post('go')
  updateLastVisit(@Body() body: any) {
    const { place } = body;
    const now = dayjs().format();
    return this.MenusService.updateLastVisit(place, now);
  }
}
