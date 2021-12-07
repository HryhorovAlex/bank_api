import express, { Application, Router } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import {
  getBranchRouter,
  getEmployeeRouter,
  getDepartmentRouter,
  getAccountRouter,
} from './Routes';
import { authMiddleWare, noRouteMiddleWare, errorMiddleware } from './Middleware';
import { getServices, IGetServices } from './utils/getServices';
import './test-faker';

dotenv.config();

export const runServer = () => {
  const app: Application = express();

  const port: string = process.env.PORT!;

  const { branchService, departmentService, employeeService, accountService }: IGetServices =
    getServices();

  const branch: Router = getBranchRouter({ branchService });
  const department: Router = getDepartmentRouter({ departmentService });
  const employee: Router = getEmployeeRouter({ employeeService });
  const account: Router = getAccountRouter({ accountService });

  app.use(bodyParser.json());

  // app.use('/', authRouter);

  app.use(authMiddleWare);

  app.use('/branch', branch);
  app.use('/department', department);
  app.use('/employee', employee);
  app.use('/account', account);

  // app.use('/user', userRouter);

  app.use(noRouteMiddleWare);

  app.use(errorMiddleware);

  app.listen(port, () => console.log(`server run on port ${port}`));
};
