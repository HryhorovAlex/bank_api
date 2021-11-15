import express, { Application } from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import { authRouter, branchRouter, employeeRouter, userRouter } from './Routes';
import { authMiddleWare, noRouteMiddleWare, errorMiddleware } from './Middleware';

dotenv.config();

createConnection()
  .then(() => {
    console.log('DB connected!');

    const app: Application = express();

    const port: string = process.env.PORT!;

    app.use('/', authRouter);

    app.use(authMiddleWare);

    app.use('/branch', branchRouter);

    app.use('/employee', employeeRouter);

    app.use('/user', userRouter);

    app.use(noRouteMiddleWare);

    app.use(errorMiddleware);

    app.listen(port, () => console.log(`server run on port ${port}`));
  })
  .catch((error) => {
    console.log(error);
  });
