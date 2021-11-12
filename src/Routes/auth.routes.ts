import { Router } from 'express';

import { AuthController } from '../Controllers';

export const authRouter: Router = Router();

authRouter.post('/login', AuthController.login);
authRouter.post('/register', AuthController.register);
