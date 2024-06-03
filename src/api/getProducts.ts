import { API_URL } from "../constants";
import { Product } from "../types";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const apiData: Product[] = await response.json();

  return apiData;
};
