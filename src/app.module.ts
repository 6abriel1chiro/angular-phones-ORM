import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { PhonesService } from './phones/phones.service';
import { PhonesController } from './phones/phones.controller';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [
    PhonesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ucb',
      synchronize: true,
      autoLoadEntities: true,
    }),
    SongsModule,
    PhonesModule,
  ],
  controllers: [AppController, PhonesController],
  providers: [AppService],
})
export class AppModule {}
