import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffresModule } from './offres/offres.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),OffresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
