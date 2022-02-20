import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusController } from './menus/menus.controller';
import { MenusModule } from './menus/menus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lunch } from './entities/lunchLists.entity';
import { User } from './entities/mcUser.entity';

@Module({
  imports: [
    MenusModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      //docker 용 host
      // host: 'host.docker.internal',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '!dlgudxo90',
      database: 'lunch',
      entities: [Lunch, User], // 사용할 entity의 클래스명을 넣어둔다.
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      synchronize: true, // prod.일때에는 false로 해두는 게 안전하다.
      autoLoadEntities: true,
      cli: {
        migrationsDir: 'migration',
      },
    }),
  ],
  controllers: [AppController, MenusController],
  providers: [AppService],
})
export class AppModule {}
