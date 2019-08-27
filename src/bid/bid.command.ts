export class BidCommand {
  constructor(
    public readonly bidTransactionGUID: string,
    public readonly bidUserGUID: string,
    public readonly auctionID: string,
    public readonly bidAmount: number,
  ) {}
}
