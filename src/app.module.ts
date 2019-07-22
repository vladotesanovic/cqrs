import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
