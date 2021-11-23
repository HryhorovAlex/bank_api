import { Router } from 'express';

import { authController } from '../Controllers';

export const authRouter: Router = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
