import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { BidEvent, BidEventSuccess } from './bid.events';
import { MailCommand } from '../mail/mail.command';
import { BidCommand } from './bid.command';
import { PostponeAuctionCommand } from '../auction/auction.command';

@Injectable()
export class BidSaga {

  @Saga()
  createBid = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(BidEvent),
      map((event: BidEvent) => {
        return new BidCommand(event.bidTransactionGUID, event.bidUser, event.auctionID, event.bidAmount);
      }),
    );
  }

  @Saga()
  createBidSuccess = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(BidEventSuccess),
      flatMap((event: BidEventSuccess) => {

        // We are always passing transaction GUID
        // event.bidTransactionGUID

        return [
          new MailCommand(event.user.email, {
            title: 'You did it...',
            message: 'Congrats',
          }),
          new PostponeAuctionCommand(event.auctionID),
          // create activity command
        ];
      }),
    );
  }
}
