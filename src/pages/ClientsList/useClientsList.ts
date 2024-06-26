import { useEffect, useState } from "react";
import { Customer } from "../../types";
import { getClients } from "../../api/getClients";

const useClientsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const clients = await getClients();

        setData(clients);
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
