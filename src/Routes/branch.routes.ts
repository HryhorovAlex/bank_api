import { Router } from 'express';

import { branchController } from '../Controllers';

export const branchRouter: Router = Router();

branchRouter.get('/:id', branchController.getOne);
branchRouter.get('/', branchController.getAll);
branchRouter.post('/', branchController.create);
branchRouter.patch('/:id', branchController.update);
branchRouter.delete('/:id', branchController.delete);
