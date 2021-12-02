import { Request, Response, NextFunction } from 'express';
import { ApiError, IErrorInterface } from '../utils/ApiError';

export const errorMiddleware = (err: IErrorInterface, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.code).json(err.msg);
    return;
  }

  res.status(500).json('Something went wrong');
};
