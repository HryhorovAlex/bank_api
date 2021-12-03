import { Branch } from '../entity/branch.entity';
import { IBranchService } from '../Services';
import { BaseController } from './base.controller';

export class BranchController extends BaseController<Branch> {
  protected readonly branchService: IBranchService;
  constructor(branchService: IBranchService) {
    super({ service: branchService })
  }
}
