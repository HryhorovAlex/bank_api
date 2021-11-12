import { Router } from 'express';

import { EmployeeController } from '../Controllers';

export const employeeRouter: Router = Router();

employeeRouter.get('/:employeeId', EmployeeController.getOne);
employeeRouter.get('/', EmployeeController.getAll);
employeeRouter.post('/', EmployeeController.createEmployee);
employeeRouter.patch('/', EmployeeController.updateEmployee);
employeeRouter.delete('/', EmployeeController.deleteEmployee);
