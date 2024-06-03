import { useEffect, useState } from "react";
import ClientCard from "./ClientCard/ClientCard";
import Skeleton from "./Skeleton/Skeleton";
import useClientsList from "./useClientsList";

const ClientsList = () => {
  const { isLoading, isError, data } = useClientsList();

  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const filtered = data.filter((item) =>
      item.givenName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="w-full p-4 border rounded-lg shadow md:p-8 bg-darkgray border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold leading-none text-white mb-4">
          Clientes
        </h1>
        <label className="text-white flex gap-3 items-center">
          Buscar:{" "}
          <input
            type="text"
            onChange={handleInputChange}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enriqueta"
            required
          />
        </label>
      </div>

      {isLoading && !isError && <Skeleton />}

      {!isLoading && isError && (
        <div className="p-4 bg-yellow text-lg rounded-md">
          ❌ Error al cargar los clientes
        </div>
      )}

      {!isLoading && !isError && filteredData.length === 0 && (
        <div className="bg-yellow text-lg rounded-md mt-6 p-3">
          No se encontraron clientes con el nombre "{inputValue}"
        </div>
      )}

      {!isLoading && !isError && (
        <ul className="divide-y divide-gray-700">
          {filteredData.map((customer) => (
            <ClientCard customer={customer} key={customer._id} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default ClientsList;
