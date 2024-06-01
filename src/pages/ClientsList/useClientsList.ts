import { useEffect, useState } from "react";
import { Customer } from "../../types";

const useClientsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/clients`);
        const apiData: Customer[] = await response.json();

        setData(apiData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};
export default useClientsList;
