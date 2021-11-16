export interface INewUser {
  firstName: string;
  lastName: string;
  age: number;
}

export interface IUser extends INewUser {
  id: number;
}
