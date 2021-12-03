import { Repository } from 'typeorm';
import { Branch } from '../entity/branch.entity';
import { BaseService } from './base.service';

export interface IBranchService extends BaseService<Branch> { }

export class BranchService extends BaseService<Branch> implements IBranchService {
  constructor(repository: Repository<Branch>) {
    super(repository);
  }
}
