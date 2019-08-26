import { IAuctionInterface } from './auction.interface';

export class AuctionEventsPostponed {
  constructor(
    public readonly auction: IAuctionInterface,
  ) {}
}
