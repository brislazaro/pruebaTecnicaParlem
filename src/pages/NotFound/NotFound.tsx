import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-6 text-3xl">❌ 404 - Página no encontrada</p>
      <NavLink to="/" className="px-4 py-2 bg-yellow rounded-md text-xl">
        Ir al inicio
      </NavLink>
    </div>
  );
};

export default NotFound;
