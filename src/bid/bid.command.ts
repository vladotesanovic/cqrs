export class BidCommand {
  constructor(
    public readonly bidUserGUID: string,
    public readonly auctionID: string,
    public readonly bidAmount: number,
  ) {}
}
