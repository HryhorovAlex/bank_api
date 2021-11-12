import { Router } from 'express';

import { UserController } from '../Controllers';

export const userRouter: Router = Router();

userRouter.get('/:userId', UserController.getOne);
userRouter.get('/', UserController.getAll);
