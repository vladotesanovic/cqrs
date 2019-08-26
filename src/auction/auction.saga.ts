import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { MailCommand } from '../mail/mail.command';
import { AuctionEventsPostponed } from './auction.events';

@Injectable()
export class AuctionSaga {

  @Saga()
  createBid = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(AuctionEventsPostponed),
      flatMap((event: AuctionEventsPostponed) => {

        // send emails to all existing bidders
        const bidders = [
          new MailCommand('bidder1@emailid', {
            title: 'Someone made a bid',
            message: 'Hurry up',
          }),
          new MailCommand('bidder2@emailid', {
            title: 'Someone made a bid',
            message: 'Hurry up',
          }),
        ];

        return [
          ...bidders,
          // create activity
        ];
      }),
    );
  }
}
