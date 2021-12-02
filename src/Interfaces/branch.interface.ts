export interface INewBranch {
  name: string;
  zip: string;
  state: string;
  address: string;
  city: string;
}

export interface IUpdateBranch extends Partial<INewBranch> {};

export interface IBranch extends INewBranch {
  id: number;
}