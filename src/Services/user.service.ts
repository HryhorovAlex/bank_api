import { AbstractRepository, EntityRepository } from 'typeorm';

import { User } from '../entity/user.entity';
import { INewUser, IUser } from '../Interfaces';

export interface IUserService {
  getUser: (id: number) => Promise<IUser | void>;
  getAllUsers: () => Promise<IUser[]>;
  createUser: (user: INewUser) => Promise<IUser>;
}

@EntityRepository(User)
export class UserService extends AbstractRepository<User> implements IUserService {
  public async getUser(id: number): Promise<IUser | void> {
    return this.repository.findOne(id);
  }

  public async getAllUsers(): Promise<IUser[]> {
    return this.repository.find();
  }

  public createUser = async (user: INewUser): Promise<IUser> => {
    const result: IUser = await this.repository.create(user);
    await this.repository.save(result);
    return result;
  };
}
