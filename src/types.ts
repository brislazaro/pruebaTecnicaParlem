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

export type Product = {
  _id: number;
  productName: string;
  mbSpeed: number | null;
  gbData: number | null;
  productTypeName: string;
  numeracioTerminal: number;
  soldAt: string;
  customerId: string;
};
