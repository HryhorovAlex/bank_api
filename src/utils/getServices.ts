import { getRepository } from 'typeorm';
import { Branch } from '../entity/branch.entity';
import { Department } from '../entity/department.entity';
import { Employee } from '../entity/employee.entity';
import {
  DepartmentService,
  EmployeeService,
  IBranchService,
  IDepartmentService,
  IEmployeeService,
} from '../Services';
import { BranchService } from '../Services/branch.service';

export interface IGetServices {
  branchService: IBranchService;
  departmentService: IDepartmentService;
  employeeService: IEmployeeService;
}

export const getServices = (): IGetServices => {
  return {
    branchService: new BranchService(getRepository(Branch)),
    departmentService: new DepartmentService(getRepository(Department)),
    employeeService: new EmployeeService(getRepository(Employee)),
  };
};
