export interface INewCustomer {
  phoneNumber: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface ICustomer extends INewCustomer {
  id: number;
}
