import { useEffect, useState } from "react";
import { Customer } from "../../../types";
import { getClients } from "../../../api/getClients";

const useClientData = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Customer>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const clients = await getClients();

        const selectedClient = clients.find(
          (client) => client.customerId === id
        );

        setData(selectedClient);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    isLoading,
    isError,
    data,
  };
};
export default useClientData;
