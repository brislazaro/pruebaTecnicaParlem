import { Customer } from "../types";

export const getClients = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/clients`);
  const apiData: Customer[] = await response.json();

  return apiData;
};
