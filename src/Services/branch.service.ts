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
  public async getOne(id: number): Promise<IBranch | void> {
    const repository: Repository<Branch> = getRepository(Branch);
    return repository.findOne(id);
  }

  public async getAll(): Promise<Branch[]> {
    const repository: Repository<Branch> = getRepository(Branch);
    return repository.find();
  }

  public create = async (newBranch: INewBranch): Promise<IBranch> => {
    const repository: Repository<Branch> = getRepository(Branch);
    const result: Branch = repository.create(newBranch);
    return repository.save(result);
  };

  public delete = async (id: number): Promise<void> => {
    await getRepository(Branch).delete(id);
  }

  public update = async (id: number, updateBranch: IUpdateBranch): Promise<IBranch> => {
    const repository: Repository<Branch> = getRepository(Branch);
    await repository.update(id, updateBranch);
    return repository.findOne(id) as Promise<IBranch>;
  }
}

export const branchService = new BranchService();
