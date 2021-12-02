import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { Branch } from '../entity/branch.entity';
import { IBranch, INewBranch, IUpdateBranch } from '../Interfaces';

export interface IBranchService {
  getOne: (id: number) => Promise<IBranch | void>;
  getAll: () => Promise<IBranch[]>;
  create: (user: INewBranch) => Promise<IBranch>;
  delete: (id: number) => Promise<number>;
  update: (id: number, user: IUpdateBranch) => Promise<any>;
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
    const result: Branch = await repository.create(newBranch);
    await repository.save(result);
    return result;
  };

  public delete = async (id: number): Promise<number> => {
    const repository: Repository<Branch> = getRepository(Branch);
    const result: DeleteResult = await repository.delete(id);
    return id;
  }

  public update = async (id: number, updateBranch: IUpdateBranch): Promise<any> => {
    const repository: Repository<Branch> = getRepository(Branch);
    const result: UpdateResult = await repository.update(id, updateBranch);
    const branch: any = repository.findOne(id);
    return branch;
  }
}

export const branchService = new BranchService();
