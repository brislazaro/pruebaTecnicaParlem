import { FC } from "react";
import Skeleton from "../../ClientsList/Skeleton/Skeleton";
import useClientData from "./useClientData";
import { useParams } from "react-router-dom";

const ClientData: FC = () => {
  const { id = "" } = useParams();
  const { isLoading, isError, data } = useClientData(id);

  return (
    <>
      {isLoading && !isError && <Skeleton />}

      {!isLoading && isError && (
        <div className="p-4 bg-yellow text-lg rounded-md mb-4">
          ❌ Error al cargar el cliente
        </div>
      )}

      {!isLoading && !isError && !data && (
        <div className="p-4 bg-yellow text-lg rounded-md mb-4">
          ❌ No se ha encontrado un cliente con el id {id}
        </div>
      )}

      {!isLoading && !isError && data && (
        <div
          className="py-4 flex flex-col gap-4 text-white"
          data-testid="clientCard"
        >
          <p className="text-base font-semibold ">
            {data?.givenName} {data?.familyName1}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-sm truncate text-gray-400 ">
              <span className="capitalize">{data?.docType}</span>:{" "}
              {data?.docNum}
            </p>
            <p className="text-sm truncate text-gray-400">
              Email: {data?.email}
            </p>
            <p className="text-sm truncate text-gray-400">
              Telefono: {data?.phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientData;
