import { getRepository } from "typeorm";
import { Branch } from "../entity/branch.entity";
import { Department } from "../entity/department.entity";
import { DepartmentService, IBranchService, IDepartmentService } from "../Services";
import { BranchService } from "../Services/branch.service";

export interface IGetServices {
  branchService: IBranchService;
  departmentService: IDepartmentService;
}

export const getServices = (): IGetServices => {
  return {
    branchService: new BranchService(getRepository(Branch)),
    departmentService: new DepartmentService(getRepository(Department))
  }
}