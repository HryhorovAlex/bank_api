import { NextFunction, Request, Response } from 'express';
// import { ApiError } from '../utils/ApiError';

export class BranchController {
  public async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve(`Requested branch ${req.params.branchId}`), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Get all branches'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  public async createBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Created a new branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  public async updateBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Updated a branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  public async deleteBranch(req: Request, res: Response, next: NextFunction) {
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

export const branchController = new BranchController();
