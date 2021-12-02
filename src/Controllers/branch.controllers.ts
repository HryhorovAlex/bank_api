import  { NextFunction, Request, Response } from 'express';
import { IBranch, INewBranch } from '../Interfaces';
import { branchService, IBranchService } from '../Services';
import { ApiError } from '../utils/ApiError';
import { isNumber } from '../utils/isNumber';

export class BranchController {

  protected readonly branchService: IBranchService;

  constructor() {
    this.branchService = branchService;
  }

  public getOne = async({ params: { id }}: Request, res: Response, next: NextFunction) => {
    try {
      const idToNumber = isNumber(id);
      const branch: IBranch = await this.isBranchExist(idToNumber)
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }

  public getAll = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const branches: IBranch[] = await this.branchService.getAll();
      res.status(200).json(branches);
    } catch (error) {
      next(error);
    }
  }

  public create = async({ body }: Request, res: Response, next: NextFunction) => {
    try {
      const newBranch: INewBranch = await this.branchService.create(body);
      res.status(201).json(newBranch);
    } catch (error) {
      next(error);
    }
  }

  public update = async ({ params: { id }, body }: Request, res: Response, next: NextFunction) => {
    try {
      const idToNumber = isNumber(id);
      await this.isBranchExist(idToNumber);
      const updatedBranch = await this.branchService.update(idToNumber, body)
      res.status(200).json(updatedBranch);
    } catch (error) {
      next(error);
    }
  }

  public delete = async ({ params: { id }}: Request, res: Response, next: NextFunction) => {
    try {
      const idToNumber = isNumber(id);
      const branch: IBranch = await this.isBranchExist(idToNumber);
      await this.branchService.delete(idToNumber)
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }

  private isBranchExist = async (id: number): Promise<IBranch> => {
    const branch: IBranch | void = await this.branchService.getOne(id);
    if (!branch) {
      throw ApiError.notExist(`Branch with id ${id} doesn't exist`)
    } 
    return branch
  }
}

export const branchController = new BranchController();
