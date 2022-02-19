import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lunch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  menu: string;

  @Column()
  distance: string;

  @Column()
  isNoodle: string;

  @Column()
  lastVisit: string;

  @Column()
  count: number;
}
