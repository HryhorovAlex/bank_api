import e, { NextFunction, Request, Response } from 'express';
import { IBranch } from '../Interfaces';
import { branchService, IBranchService } from '../Services';
import { ApiError } from '../utils/ApiError';

export class BranchController {

  protected readonly branchService: IBranchService;

  constructor() {
    this.branchService = branchService;
  }

  public getOne = async({ params: { id }}: Request, res: Response, next: NextFunction) => {
    try {
      const branch: IBranch | void = await this.branchService.getOne(Number(id));
      if (branch) {
        res.status(200).json(branch);
      } else {
        next(ApiError.notExist(`Branch with id ${id} doesn't exist`))
      }
    } catch (error) {
      next(error);
    }
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const branches: IBranch[] = await this.branchService.getAll();
      res.status(200).json(branches);
    } catch (error) {
      next(error);
    }
  }

  public createBranch = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Created a new branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  public updateBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const branch: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Updated a branch'), 1000)
      );
      res.status(200).json({ branch });
    } catch (error) {
      next(error);
    }
  }

  public deleteBranch = async (req: Request, res: Response, next: NextFunction) => {
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
