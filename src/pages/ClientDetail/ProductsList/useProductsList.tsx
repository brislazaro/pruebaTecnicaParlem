import { useEffect, useState } from "react";
import { Product } from "../../../types";
import { getProducts as getProducts } from "../../../api/getProducts";

const useProductsList = (customerId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const products = await getProducts();

        const clientProducts = products.filter(
          (product) => product.customerId === customerId
        );

        setData(clientProducts || []);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [customerId]);

  return {
    isLoading,
    isError,
    data,
  };
};
export default useProductsList;
