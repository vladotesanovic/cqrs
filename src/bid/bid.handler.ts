import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { BidCommand } from './bid.command';
import { AuctionRepository } from '../auction/auction.repository';

@CommandHandler(BidCommand)
export class BidHandler implements ICommandHandler<BidCommand> {
  constructor(
    private readonly auctionRepository: AuctionRepository,
    private readonly publisher: EventPublisher) {}

  async execute(command: BidCommand) {

    const { bidAmount, auctionID, bidUserGUID } = command;

    // tslint:disable-next-line:no-console
    console.log(`Make a bid on ${auctionID}, with userID: ${bidUserGUID} amount: ${bidAmount}`);

    // to associate model ( Bid ) and publisher, we use code bellow
    const auction = this.publisher.mergeObjectContext(
      await this.auctionRepository.getActionById(auctionID),
    );

    auction.bidOnAuction(bidUserGUID, bidAmount);
    auction.commit();
  }

}
