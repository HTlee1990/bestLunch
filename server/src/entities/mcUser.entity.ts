import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
