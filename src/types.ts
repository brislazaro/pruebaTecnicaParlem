export type Customer = {
  _id: number;
  docType: string;
  docNum: string;
  email: string;
  customerId: string;
  givenName: string;
  familyName1: string;
  phone: string;
};

export type CustomerProps = {
  customer: Customer;
};
