import { IBranchService } from "../Services";
import { BranchService } from "../Services/branch.service";

export interface IGetServices {
  branchService: IBranchService;
}

export const getServices = (): IGetServices => {
  return {
    branchService: new BranchService()
  }
}