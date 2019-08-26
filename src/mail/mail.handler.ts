import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { MailCommand } from './mail.command';

@CommandHandler(MailCommand)
export class MailHandler implements ICommandHandler<MailCommand> {

  async execute(command: MailCommand) {
    const { mailAddress, mailDTO } = command;
    // tslint:disable-next-line:no-console
    console.log(`send email to ${mailAddress}`);
    // logic for sending email

    return {
      sent: true,
      payload: {
        mailAddress, mailDTO,
      },
    };
  }
}
