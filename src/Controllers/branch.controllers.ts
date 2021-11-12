import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';

export class BranchController {
  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve(`Requested branch ${req.params.branchId}`), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Get all branches'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  static async createBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Created a new branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  static async updateBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Updated a branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Deleted a branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }
}
