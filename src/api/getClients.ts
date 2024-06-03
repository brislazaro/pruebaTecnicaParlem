import { API_URL } from "../constants";
import { Customer } from "../types";

export const getClients = async () => {
  const response = await fetch(`${API_URL}/clients`);
  const apiData: Customer[] = await response.json();

  return apiData;
};
