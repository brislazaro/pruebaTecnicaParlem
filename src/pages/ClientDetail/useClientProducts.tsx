import { useEffect, useState } from "react";
import { Product } from "../../types";
import { getProduct } from "../../api/getProduct";

const useClientProducts = (customerId: string) => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isErrorProducts, setIsErrorProducts] = useState(false);
  const [dataProducts, setDataProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const products = await getProduct();

        const clientProducts = products.filter(
          (product) => product.customerId === customerId
        );

        setDataProducts(clientProducts || []);
      } catch (error) {
        setIsErrorProducts(true);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    fetchData();
  }, [customerId]);

  return {
    isLoadingProducts,
    isErrorProducts,
    dataProducts,
  };
};
export default useClientProducts;
