import { Router } from 'express';

import { BranchController } from '../Controllers';

export const branchRouter: Router = Router();

branchRouter.get('/:branchId', BranchController.getOne);
branchRouter.get('/', BranchController.getAll);
branchRouter.post('/', BranchController.createBranch);
branchRouter.patch('/', BranchController.updateBranch);
branchRouter.delete('/', BranchController.deleteBranch);
