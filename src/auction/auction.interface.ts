export interface IAuctionInterface {
  id: string;
  started?: Date;
  end?: Date;
  higherBid?: number;
  higherBidderID?: string;
  history?: object[];
}
