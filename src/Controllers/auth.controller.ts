import { NextFunction, Request, Response } from 'express';
import { IUser } from '../Interfaces';
import { IUserService, UserService } from '../Services';

export class AuthController {
  protected readonly userService: IUserService;
  constructor() {
    this.userService = new UserService();
  }
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      // const login: string = await new Promise((resolve) =>
      //   setTimeout(() => resolve('Login response'), 1000)
      // );
      // res.status(200).json({ login });
    } catch (error) {
      next(error);
    }
  }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const register: string = await new Promise((resolve) =>
        setTimeout(() => resolve('register response'), 1000)
      );
      const user: IUser = await this.userService.createUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
