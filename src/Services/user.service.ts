import { getRepository, Repository } from 'typeorm';

import { User } from '../entity/user.entity';
import { INewUser, IUser } from '../Interfaces';

export interface IUserService {
  getUser: (id: number) => Promise<IUser | void>;
  getAllUsers: () => Promise<IUser[]>;
  createUser: (user: INewUser) => Promise<IUser>;
}

export class UserService implements IUserService {
  public async getUser(id: number): Promise<IUser | void> {
    const repository: Repository<User> = getRepository(User);
    return repository.findOne(id);
  }

  public async getAllUsers(): Promise<IUser[]> {
    const repository: Repository<User> = getRepository(User);
    return repository.find();
  }

  public createUser = async (user: INewUser): Promise<IUser> => {
    const repository: Repository<User> = getRepository(User);
    const result: IUser = await repository.create(user);
    await repository.save(result);
    return result;
  };
}

export const userService = new UserService();
