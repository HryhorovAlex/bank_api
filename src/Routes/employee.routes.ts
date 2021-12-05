import { Router } from 'express';

import { EmployeeController } from '../Controllers';
import { IEmployeeService } from '../Services';

interface IGetEmployeeRouter {
  employeeService: IEmployeeService;
}

export const getEmployeeRouter = ({ employeeService }: IGetEmployeeRouter): Router => {
  const employeeRouter: Router = Router();

  const employeeController = new EmployeeController(employeeService);

  employeeRouter.get('/:id', employeeController.getOne);
  employeeRouter.get('/', employeeController.getAll);
  employeeRouter.post('/', employeeController.create);
  employeeRouter.patch('/:id', employeeController.update);
  employeeRouter.delete('/:id', employeeController.delete);

  return employeeRouter;
};
