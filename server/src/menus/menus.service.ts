import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lunch } from '../entities/lunchLists.entity';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Lunch) private lunchRepository: Repository<Lunch>,
  ) {}

  // if filter === '', send the entire list
  findAll(): Promise<Lunch[]> {
    return this.lunchRepository.find();
  }

  //there is a filter value, send filtered list
  async findSome(category, rice, distance): Promise<Lunch[]> {
    const list = await this.lunchRepository.find();
    const condition = [category, rice, distance].filter((c) => c);
    const filtered = list.filter((place) => {
      let count = 0;
      if (category && place.category === category) count++;
      if (rice && place.isNoodle === rice) count++;
      if (distance && place.distance === distance) count++;

      if (count === condition.length) return true;
    });
    const result = filtered.filter((p) => {
      //if didn't visit at all, return true;
      if (p.lastVisit === 'null') return true;

      //if visit in 3 days, return false;
      const last = dayjs(p.lastVisit).format('YYYY-MM-DD');
      const dif = -dayjs().diff(last, 'day');
      dif <= 3 ? false : true;
    });

    return result;
  }

  //add new place
  async addMenu(m: {
    name: string;
    category: string;
    menu: string;
    distance: string;
    isNoodle: string;
  }) {
    const newMenu = {
      ...m,
      lastVisit: 'null',
      count: 1,
    };

    await this.lunchRepository.insert(newMenu);
    return newMenu;
  }

  //update last visit day
  async updateLastVisit(place, day) {
    const todayPlace = await this.lunchRepository.findOne({ name: place });
    await this.lunchRepository.update(todayPlace.id, { lastVisit: day });
    return 'updated!';
  }
}
