import { NextFunction, Request, Response } from 'express';

export class UserController {
  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const user: string = await new Promise((resolve) =>
        setTimeout(() => resolve(`Requested user ${req.params.userId}`), 1000)
      );
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Get all users'), 1000)
      );
      res.status(200).json({ users });
    } catch (error) {
      next(error);
    }
  }
}
