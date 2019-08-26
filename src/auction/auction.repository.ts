import { Injectable } from '@nestjs/common';

import { AuctionModel } from './auction.model';
import { IAuctionInterface } from './auction.interface';

@Injectable()
export class AuctionRepository {

  async getActionById(id: string) {

    // fetch it from database for example
    const auction: IAuctionInterface = {
      id,
      started: new Date(),
    };

    return new AuctionModel(auction);
  }

  async getAll() {
    return [];
  }
}
