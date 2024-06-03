import { Product } from "../types";

export const getProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  const apiData: Product[] = await response.json();

  return apiData;
};
