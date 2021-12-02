import { Router } from 'express';

import { branchController } from '../Controllers';

export const branchRouter: Router = Router();

branchRouter.get('/:id', branchController.getOne);
branchRouter.get('/', branchController.getAll);
branchRouter.post('/', branchController.createBranch);
branchRouter.patch('/', branchController.updateBranch);
branchRouter.delete('/', branchController.deleteBranch);
