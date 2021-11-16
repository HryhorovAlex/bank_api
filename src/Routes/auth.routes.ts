import { Router } from 'express';

import { AuthController } from '../Controllers';

const authController = new AuthController();

export const authRouter: Router = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
