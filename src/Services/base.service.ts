import { Repository } from "typeorm";

export interface IBaseService<IRecord> {
  getOne: (id: number) => Promise<IRecord | void>;
}

export class BaseService<IRecord> implements IBaseService<IRecord> {

  private readonly repository: Repository<any>
  constructor(repository: Repository<any>) {
    this.repository = repository;
  }


  public async getOne(id: number): Promise<IRecord | void> {
    return this.repository.findOne(id);
  }
}