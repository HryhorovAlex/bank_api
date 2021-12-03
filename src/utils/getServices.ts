import { getRepository } from "typeorm";
import { Branch } from "../entity/branch.entity";
import { IBranchService } from "../Services";
import { BranchService } from "../Services/branch.service";

export interface IGetServices {
  branchService: IBranchService;
}

export const getServices = (): IGetServices => {
  return {
    branchService: new BranchService(getRepository(Branch))
  }
}