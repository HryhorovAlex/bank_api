import { Router } from 'express';

import { DepartmentController } from '../Controllers';
import { IDepartmentService } from '../Services';

interface IGetDepartmentRouter {
  departmentService: IDepartmentService;
}

export const getDepartmentRouter = ({ departmentService }: IGetDepartmentRouter): Router => {
  const departmentRouter: Router = Router();

  const departmentController = new DepartmentController(departmentService);

  departmentRouter.get('/:id', departmentController.getOne);
  departmentRouter.get('/', departmentController.getAll);
  departmentRouter.post('/', departmentController.create);
  departmentRouter.patch('/:id', departmentController.update);
  departmentRouter.delete('/:id', departmentController.delete);

  return departmentRouter;
}

