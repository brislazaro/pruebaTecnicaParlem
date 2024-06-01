import ClientCard from "./ClientCard/ClientCard";
import useClientsList from "./useClientsList";

const ClientsList = () => {
  const { isLoading, isError, data } = useClientsList();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="w-full p-4 border  rounded-lg shadow md:p-8 bg-darkgray border-gray-700">
      <h1 className="text-xl font-bold leading-none text-white mb-4">
        Clientes
      </h1>

      <ul className="divide-y divide-gray-700 ">
        {data.map((customer) => (
          <ClientCard customer={customer} key={customer._id} />
        ))}
      </ul>
    </div>
  );
};
export default ClientsList;
