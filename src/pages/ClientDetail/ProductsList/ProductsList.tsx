import { FC } from "react";
import Skeleton from "../../ClientsList/Skeleton/Skeleton";
import { useParams } from "react-router-dom";
import useProductsList from "./useProductsList";

const ProductsList: FC = () => {
  const { id = "" } = useParams();
  const { isLoading, isError, data } = useProductsList(id);

  return (
    <>
      {isLoading && !isError && <Skeleton />}

      {!isLoading && isError && (
        <div className="p-4 bg-yellow text-lg rounded-md">
          ❌ Error al cargar el cliente
        </div>
      )}

      {!isLoading && !isError && (
        <ul className="text-white flex flex-col gap-8">
          {data && data.length > 0 ? (
            data.map((product) => (
              <li key={product._id}>
                <p>Producto: {product.productName}</p>
                <p>Velocidad: {product.mbSpeed || "-"}</p>
                <p>gbData: {product.gbData || "-"}</p>
                <p>Adquirido: {product.soldAt}</p>
              </li>
            ))
          ) : (
            <p className="text-yellow-500">Sin productos contratados</p>
          )}
        </ul>
      )}
    </>
  );
};

export default ProductsList;
