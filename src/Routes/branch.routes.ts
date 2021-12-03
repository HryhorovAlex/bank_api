import { Router } from 'express';

import { BranchController } from '../Controllers';
import { IBranchService } from '../Services';

interface IGetBranchRouter {
  branchService: IBranchService;
}

export const getBranchRouter = ({ branchService }: IGetBranchRouter): Router => {
  const branchRouter: Router = Router();

  const branchController = new BranchController(branchService);

  branchRouter.get('/:id', branchController.getOne);
  branchRouter.get('/', branchController.getAll);
  branchRouter.post('/', branchController.create);
  branchRouter.patch('/:id', branchController.update);
  branchRouter.delete('/:id', branchController.delete);

  return branchRouter;
}

