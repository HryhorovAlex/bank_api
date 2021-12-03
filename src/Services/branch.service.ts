import { getRepository, Repository } from 'typeorm';
import { Branch } from '../entity/branch.entity';
import { IBranch, INewBranch, IUpdateBranch } from '../Interfaces';

export interface IBranchService {
  getOne: (id: number) => Promise<IBranch | void>;
  getAll: () => Promise<IBranch[]>;
  create: (user: INewBranch) => Promise<IBranch>;
  delete: (id: number) => Promise<void>;
  update: (id: number, user: IUpdateBranch) => Promise<IBranch>;
}

export class BranchService implements IBranchService {

  private readonly repository: Repository<Branch>
  constructor() {
    this.repository = getRepository(Branch)
  }

  public async getOne(id: number): Promise<IBranch | void> {
    return this.repository.findOne(id);
  }

  public async getAll(): Promise<Branch[]> {
    return this.repository.find();
  }

  public create = async (newBranch: INewBranch): Promise<IBranch> => {
    const result: Branch = this.repository.create(newBranch);
    return this.repository.save(result);
  };

  public delete = async (id: number): Promise<void> => {
    await getRepository(Branch).delete(id);
  }

  public update = async (id: number, updateBranch: IUpdateBranch): Promise<IBranch> => {
    await this.repository.update(id, updateBranch);
    return this.repository.findOne(id) as Promise<IBranch>;
  }
}
