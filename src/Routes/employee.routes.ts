import { Router } from 'express';

import { employeeController } from '../Controllers';

export const employeeRouter: Router = Router();

employeeRouter.get('/:employeeId', employeeController.getOne);
employeeRouter.get('/', employeeController.getAll);
employeeRouter.post('/', employeeController.createEmployee);
employeeRouter.patch('/', employeeController.updateEmployee);
employeeRouter.delete('/', employeeController.deleteEmployee);
