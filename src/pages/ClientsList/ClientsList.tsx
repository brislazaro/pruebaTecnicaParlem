import ClientsCard from "./ClientsCard";
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
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="lex items-center justify-between ">
        <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Clientes
        </h1>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
        {data.map((customer) => (
          <ClientsCard customer={customer} />
        ))}
      </ul>
    </div>
  );
};
export default ClientsList;
