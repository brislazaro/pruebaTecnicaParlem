import { NavLink } from "react-router-dom";
import ClientData from "./ClientData/ClientData";
import ProductsList from "./ProductsList/ProductsList";

function ClientDetail() {
  return (
    <>
      <div className="w-full p-4 border rounded-lg shadow md:p-8 bg-darkgray border-gray-700">
        <h1 className="text-xl font-bold leading-none text-white mb-4">
          Detalle del Cliente
        </h1>

        <ClientData />

        <h2 className="text-xl font-bold leading-none text-white mb-4">
          Productos:
        </h2>

        <ProductsList />

        <NavLink
          to="/"
          className="flex justify-center mt-10 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
        >
          Regresar
        </NavLink>
      </div>
    </>
  );
}

export default ClientDetail;
