import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientsList from "./pages/ClientsList/ClientsList.tsx";
import ClientDetail from "./pages/ClientDetail/ClientDetail.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ClientsList /> },
      { path: "/detail/:id", element: <ClientDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
