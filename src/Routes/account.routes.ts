import { Router } from 'express';

import { AccountController } from '../Controllers';
import { IAccountService } from '../Services';

interface IGetAccountRouter {
  accountService: IAccountService;
}

export const getAccountRouter = ({ accountService }: IGetAccountRouter): Router => {
  const accountRouter: Router = Router();

  const accountController = new AccountController(accountService);

  accountRouter.get('/:id', accountController.getOne);
  accountRouter.get('/', accountController.getAll);
  accountRouter.post('/', accountController.create);
  accountRouter.patch('/:id', accountController.update);
  accountRouter.delete('/:id', accountController.delete);

  return accountRouter;
};
