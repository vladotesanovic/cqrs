import { Controller, Get } from '@nestjs/common';
import { EventBus, QueryBus } from '@nestjs/cqrs';
import * as uuid from 'uuid';

import { BidEvent } from './bid/bid.events';
import { GetAuctionQuery } from './auction/auction.query';

@Controller()
export class AppController {
  constructor(private readonly eventBus: EventBus, private queryBus: QueryBus) {}

  @Get()
  async bid(): Promise<object> {

    const bidTransactionGUID = uuid.v4();
    // We are hard-coding values here
    // instead of collecting them from a request
    this.eventBus.publish(
      new BidEvent(
        bidTransactionGUID, '4ccd1088-b5da-44e2-baa0-ee4e0a58659d', '0ac04f2a-4866-42de-9387-cf392f64cd52', 233),
    );

    return {
      status: 'PENDING',
    };
  }

  @Get('/audiences')
  async getAudiences() {
    const allAudiences = await this.queryBus.execute(new GetAuctionQuery());

    return allAudiences;
  }
}
