export class BidEvent {
  constructor(
    public readonly bidUser: string,
    public readonly auctionID: string,
    public readonly bidAmount: number,
  ) {}
}

// tslint:disable-next-line:max-classes-per-file
export class BidEventSuccess {
  constructor(
    public readonly auctionID: string,
    public readonly bidAmount: number,
    public readonly user: { email: string, id: string },
  ) {}
}

// tslint:disable-next-line:max-classes-per-file
export class BidEventFail {
  constructor(
    public readonly error: object,
  ) {}
}
