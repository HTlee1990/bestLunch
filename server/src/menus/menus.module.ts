import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenusController } from './menus.controller';
import { Lunch } from '../entities/lunchLists.entity';
import { MenusService } from './menus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lunch])],
  providers: [MenusService],
  controllers: [MenusController],
  exports: [MenusService],
})
export class MenusModule {}
