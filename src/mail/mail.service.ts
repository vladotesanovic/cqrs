import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { MailDto } from './mail-dto';
import { MailCommand } from './mail.command';

@Injectable()
export class MailService {

  constructor(private readonly commandBus: CommandBus) {}

  async sendEmail(mailAddress: string, mailDTO: MailDto) {

    return this.commandBus.execute(
      new MailCommand(mailAddress, mailDTO),
    );
  }

}
