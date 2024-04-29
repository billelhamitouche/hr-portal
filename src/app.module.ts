import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffresModule } from './offres/offres.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(),OffresModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
