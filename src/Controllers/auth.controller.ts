import { NextFunction, Request, Response } from 'express';

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const login: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Login response'), 1000)
      );
      res.status(200).json({ login });
    } catch (error) {
      next(error);
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const register: string = await new Promise((resolve) =>
        setTimeout(() => resolve('register response'), 1000)
      );
      res.status(200).json({ register });
    } catch (error) {
      next(error);
    }
  }
}
