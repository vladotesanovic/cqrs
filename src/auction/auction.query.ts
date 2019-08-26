import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AuctionRepository } from './auction.repository';

export class GetAuctionQuery {}

// tslint:disable-next-line:max-classes-per-file
@QueryHandler(GetAuctionQuery)
export class GetAuctionHandler implements IQueryHandler<GetAuctionQuery> {
  constructor(private readonly repository: AuctionRepository) {}

  async execute(query: GetAuctionQuery) {
    return this.repository.getAll();
  }
}
