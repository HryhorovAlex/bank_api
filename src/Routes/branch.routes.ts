import { Router } from 'express';

import { getBranch } from '../Controllers/branch.controllers';

const branchRouter: Router = Router();

branchRouter.get('/', getBranch);

export { branchRouter };
