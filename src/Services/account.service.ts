import { Repository } from 'typeorm';
import { Account } from '../entity/account.entity';
import { BaseService } from './base.service';

export interface IAccountService extends BaseService<Account> {}

export class AccountService extends BaseService<Account> implements IAccountService {
  constructor(repository: Repository<Account>) {
    super(repository);
  }
}
