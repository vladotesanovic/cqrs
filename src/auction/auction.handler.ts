import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { PostponeAuctionCommand } from './auction.command';
import { AuctionRepository } from './auction.repository';

@CommandHandler(PostponeAuctionCommand)
export class AuctionHandler implements ICommandHandler<PostponeAuctionCommand> {
  constructor(
    private readonly auctionRepository: AuctionRepository,
    private readonly publisher: EventPublisher) {}

  async execute(command: PostponeAuctionCommand) {

    const { auctionID } = command;

    // to associate model ( Bid ) and publisher, we use code bellow
    const auction = this.publisher.mergeObjectContext(
      await this.auctionRepository.getActionById(auctionID),
    );

    // tslint:disable-next-line:no-console
    console.log('postpone it for two hours');

    auction.postponeAuction();
    auction.commit();
  }

}
