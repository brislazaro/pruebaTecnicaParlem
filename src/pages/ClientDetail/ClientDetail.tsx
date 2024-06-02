import { useParams } from "react-router-dom";
import useClientData from "./ClientData/useClientData";
import Skeleton from "../ClientsList/Skeleton/Skeleton";
import useClientProducts from "./useClientProducts";

function ClientDetail() {
  const { id = "" } = useParams();
  const { isLoading, isError, data } = useClientData(id);
  const { isLoadingProducts, isErrorProducts, dataProducts } =
    useClientProducts(id);

  return (
    <div className="w-full p-4 border rounded-lg shadow md:p-8 bg-darkgray border-gray-700">
      <h1 className="text-xl font-bold leading-none text-white mb-4">
        Detalle del Cliente
      </h1>

      {isLoading && !isError && <Skeleton />}

      {!isLoading && isError && (
        <div className="p-4 bg-yellow text-lg rounded-md">
          ❌ Error al cargar el cliente
        </div>
      )}

      {!isLoading && !isError && (
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

      <h2 className="text-xl font-bold leading-none text-white mb-4">
        Productos:
      </h2>

      {isLoadingProducts && !isErrorProducts && <Skeleton />}

      {!isLoadingProducts && isErrorProducts && (
        <div className="p-4 bg-yellow text-lg rounded-md">
          ❌ Error al cargar el cliente
        </div>
      )}

      {!isLoadingProducts && !isErrorProducts && (
        <ul className="text-white flex flex-col gap-8">
          {dataProducts?.map((product) => (
            <li>
              <p>Producto: {product.productName}</p>
              <p>Velocidad: {product.mbSpeed}</p>
              <p>gbData: {product.gbData}</p>
              <p>Adquirido: {product.soldAt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClientDetail;
