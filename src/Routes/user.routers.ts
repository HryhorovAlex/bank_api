import { Router } from 'express';

import { userController } from '../Controllers';

export const userRouter: Router = Router();

userRouter.get('/:userId', userController.getOne);
userRouter.get('/', userController.getAll);
