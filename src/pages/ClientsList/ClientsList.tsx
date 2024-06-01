import ClientCard from "./ClientCard/ClientCard";
import Skeleton from "./Skeleton/Skeleton";
import useClientsList from "./useClientsList";

const ClientsList = () => {
  const { isLoading, isError, data } = useClientsList();

  return (
    <div className="w-full p-4 border  rounded-lg shadow md:p-8 bg-darkgray border-gray-700">
      <h1 className="text-xl font-bold leading-none text-white mb-4">
        Clientes
      </h1>

      {isLoading && !isError && <Skeleton />}

      {!isLoading && isError && (
        <div className="p-4 bg-yellow text-lg rounded-md">
          ❌ Error al cargar los clientes
        </div>
      )}

      {!isLoading && !isError && (
        <ul className="divide-y divide-gray-700">
          {data.map((customer) => (
            <ClientCard customer={customer} key={customer._id} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default ClientsList;
