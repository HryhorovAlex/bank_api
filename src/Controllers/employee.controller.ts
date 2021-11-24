import { NextFunction, Request, Response } from 'express';

export class EmployeeController {
  public async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const employee: string = await new Promise((resolve) =>
        setTimeout(() => resolve(`Requested Employee ${req.params.employeeId}`), 1000)
      );
      res.status(200).json({ employee });
    } catch (error) {
      next(error);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const employee: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Get all Employees'), 1000)
      );
      res.status(200).json({ employee });
    } catch (error) {
      next(error);
    }
  }

  public async createEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const employee: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Created a new Employee'), 1000)
      );
      res.status(200).json({ employee });
    } catch (error) {
      next(error);
    }
  }

  public async updateEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const employee: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Updated a Employee'), 1000)
      );
      res.status(200).json({ employee });
    } catch (error) {
      next(error);
    }
  }

  public async deleteEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const employee: string = await new Promise((resolve) =>
        setTimeout(() => resolve('Deleted a Employee'), 1000)
      );
      res.status(200).json({ employee });
    } catch (error) {
      next(error);
    }
  }
}

export const employeeController = new EmployeeController();
