import { NextFunction, Request, Response } from 'express';
import { IUser } from '../Interfaces';
import { IUserService, userService } from '../Services';

export class AuthController {
  protected readonly userService: IUserService;
  constructor() {
    this.userService = userService;
  }
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = await this.userService.createUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}

export const authController = new AuthController();
