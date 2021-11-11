import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';

export const getBranch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const branch: string = await new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Get Branch response')), 1000)
    );
  } catch (error) {
    next(error);
  }
};
