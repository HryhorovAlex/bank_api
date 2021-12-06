import { getRepository } from 'typeorm';
import { Account } from '../entity/account.entity';
import { Branch } from '../entity/branch.entity';
import { Department } from '../entity/department.entity';
import { Employee } from '../entity/employee.entity';
import {
  DepartmentService,
  EmployeeService,
  IBranchService,
  IDepartmentService,
  IEmployeeService,
  AccountService,
  IAccountService,
  BranchService,
} from '../Services';

export interface IGetServices {
  branchService: IBranchService;
  departmentService: IDepartmentService;
  employeeService: IEmployeeService;
  accountService: IAccountService;
}

export const getServices = (): IGetServices => {
  return {
    branchService: new BranchService(getRepository(Branch)),
    departmentService: new DepartmentService(getRepository(Department)),
    employeeService: new EmployeeService(getRepository(Employee)),
    accountService: new AccountService(getRepository(Account)),
  };
};
