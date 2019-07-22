import { MailDto } from './mail-dto';

export class MailCommand {
  constructor(
    public readonly mailAddress: string,
    public readonly mailDTO: MailDto,
  ) {}
}
