import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './app.controller';
import { MailHandler } from './mail/mail.handler';
import { BidHandler } from './bid/bid.handler';
import { BidSaga } from './bid/bid.saga';
import { AuctionHandler } from './auction/auction.handler';
import { AuctionRepository } from './auction/auction.repository';
import { AuctionSaga } from './auction/auction.saga';
import { GetAuctionHandler } from './auction/auction.query';

@Module({
  imports: [
    CqrsModule,
  ],
  controllers: [AppController],
  providers: [
    MailHandler,
    AuctionSaga,
    BidHandler,
    BidSaga,
    AuctionHandler,
    GetAuctionHandler,
    AuctionRepository,
  ],
})
export class AppModule {}
