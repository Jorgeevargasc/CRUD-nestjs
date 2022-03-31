import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port: 3306,
      username : 'root',
      password : 'abr123',
      database : 'personas',
      autoLoadEntities : true
    }),
    PersonaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
