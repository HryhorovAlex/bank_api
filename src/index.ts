import express, { Application } from 'express';
import dotenv from 'dotenv';

import { branchRouter } from './Routes/branch.routes';
import { authMiddleWare } from './Middleware/auth.middleware';
import { noRouteMiddleWare } from './Middleware/noRoute.middleware';
import { errorMiddleware } from './Middleware/error.middleware';

dotenv.config();

const app: Application = express();

const port: string = process.env.PORT!;

app.use(authMiddleWare);

app.use('/branch', branchRouter);

app.use(noRouteMiddleWare);

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(errorMiddleware);

app.listen(port, () => console.log(`server run on port ${port}`));
