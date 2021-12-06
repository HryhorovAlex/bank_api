import { Account } from '../entity/account.entity';
import { IAccountService } from '../Services';
import { BaseController } from './base.controller';

export class AccountController extends BaseController<Account> {
  protected readonly accountService: IAccountService;
  constructor(accountService: IAccountService) {
    super({ service: accountService });
  }
}
