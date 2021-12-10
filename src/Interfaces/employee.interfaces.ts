export interface INewEmployee {
  firstName: string;
  lastName: string;
  stateDate: Date;
  endDate?: Date;
  superiorEmp?: number;
  title: string;
  assignedBranch: number;
  dept: number;
}

export interface IEmployee extends INewEmployee {
  id: number;
}
