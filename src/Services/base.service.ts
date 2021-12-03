import { Repository } from "typeorm";

export interface IBaseService<E> {
  getOne: (id: number) => Promise<E | void>;
  getAll: () => Promise<E[]>;
  create: (value: E) => Promise<E>;
  delete: (id: number) => Promise<void>;
  update: (id: number, values: E) => Promise<E>;
}

export class BaseService<E> implements IBaseService<E> {

  private readonly _repository: Repository<E>
  constructor(_repository: Repository<E>) {
    this._repository = _repository;
  }

  public async getOne(id: number): Promise<E | void> {
    return this._repository.findOne(id);
  }

  public async getAll(): Promise<E[]> {
    return this._repository.find();
  }

  public create = async (value: E): Promise<E> => {
    const result: E = this._repository.create(value);
    return this._repository.save(result);
  };

  public delete = async (id: number): Promise<void> => {
    await this._repository.delete(id);
  }

  public update = async (id: number, values: E): Promise<E> => {
    await this._repository.update(id, values);
    return this._repository.findOne(id) as Promise<E>;
  }
}