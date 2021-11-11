import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiError) {
    res.status((err as any).code).json((err as any).message);
    return;
  }

  res.status(500).json('Something went wrong');
};
