import { query } from 'express';
import { User } from '../entities/mcUser.entity';
import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';

export class defaultuserdata1640148812603 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const userRepo = queryRunner.connection.getRepository(User);

    await userRepo.insert([
      {
        id: 'admin',
        name: '어드민',
        email: 'admin@admin.com',
        password:
          '$2b$10$GqjQv0ZMRbDiV.2DYUjh0eFN4NKnv7d3vQqSqPj.5fvZOjbFLKYUm',
        is_active: 1,
        is_reset_pwd: 0,
        last_login_dt: null,
        // role_id: 2,
      },
      {
        id: 'gmbda',
        name: 'GMBDAdmin',
        email: 'gmbda@gmbda.com',
        password:
          '$2b$10$kxwYTrxX5bkblQWQ1Akz7eMCGgpeeRVTaAqCPl1oF3L5YIytzYBy6',
        is_active: 1,
        is_reset_pwd: 0,
        last_login_dt: null,
        // role_id: 1,
      },
      {
        id: 'monitor',
        name: '모니터',
        email: 'mo@mo.com',
        password:
          '$2b$10$zAqmK2WWLUc83T7b0aFZGuHEay6ILWZ3hQOoIMCc1zz/RS.QqW26W',
        is_active: 1,
        is_reset_pwd: 0,
        last_login_dt: null,
        // role_id: 3,
      },
    ]);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: 'admin' });
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: 'gmbda' });
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: 'monitor' });
  }
}
