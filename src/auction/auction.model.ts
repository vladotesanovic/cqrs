import { AggregateRoot } from '@nestjs/cqrs';
import { AuctionEventsPostponed } from './auction.events';
import { IAuctionInterface } from './auction.interface';
import { BidEventFail, BidEventSuccess } from '../bid/bid.events';

export class AuctionModel extends AggregateRoot {
  constructor(private readonly auction: IAuctionInterface) {
    super();
  }

  postponeAuction() {
    // validation and etc.

    // postpone it, and return new auction object with postponed date
    const auction = { ...this.auction };

    this.apply(new AuctionEventsPostponed(auction));
  }

  bidOnAuction(userID: string, amount: number) {
    // validation and etc.
    try {

      // business logic
      // upon successful bidding, dispatch new event
      this.apply(new BidEventSuccess(this.auction.id, amount, { email: 'fake@email.com', id: userID }));

    } catch (e) {

      // dispatch bid event fail action
      this.apply(new BidEventFail(e));
    }
  }
}
