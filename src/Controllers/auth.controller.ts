import { Handler, NextFunction, Request, Response } from 'express';
import { IUser } from '../Interfaces';
import { IUserService, userService } from '../Services';

interface IAuthController {
  login: Handler;
  register: Handler;
}

export class AuthController implements IAuthController {
  protected readonly userService: IUserService;
  constructor() {
    this.userService = userService;
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
      const user: IUser = await this.userService.createUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}

export const authController: IAuthController = new AuthController();
