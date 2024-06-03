import { describe, test, expect, vi, Mock } from "vitest";
import { renderComponentFactory } from "../../../testUtils";
import ProductsList from "./ProductsList";
import { screen } from "@testing-library/react";
import useProductsList from "./useProductsList";
import { Product } from "../../../types";

vi.mock("./useProductsList.ts");

const useProductsListMock = useProductsList as Mock;

describe("Given a ClientsData component", () => {
  describe("When isLoading is true", () => {
    test("Then should render the skeleton component", () => {
      useProductsListMock.mockReturnValue({
        isLoading: true,
        isError: false,
        data: [],
      });

      renderComponentFactory(<ProductsList />);

      expect(screen.getByTestId("clientsSkeleton")).toBeInTheDocument();
    });
  });

  describe("When isError is true ", () => {
    test("Then should print an error message", () => {
      useProductsListMock.mockReturnValue({
        isLoading: false,
        isError: true,
        data: [],
      });

      renderComponentFactory(<ProductsList />);

      expect(
        screen.getByText("❌ Error al cargar el cliente")
      ).toBeInTheDocument();
    });
  });

  describe("When isLoading and isError are false, but there are no products", () => {
    test("Then should: print 'Sin productos contratados'", () => {
      useProductsListMock.mockReturnValue({
        isLoading: false,
        isError: false,
        data: [],
      });

      renderComponentFactory(<ProductsList />);

      expect(screen.getByText("Sin productos contratados")).toBeInTheDocument();
    });
  });

  describe("When isLoading and isError are false and data is an object", () => {
    test("Then should print a info customer", () => {
      const productMock: Product[] = [
        {
          _id: 12345,
          productName: "Banda Ancha",
          mbSpeed: 334,
          gbData: 50,
          productTypeName: "movil",
          numeracioTerminal: 987654,
          soldAt: "enero-2024",
          customerId: "12345",
        },
      ];

      useProductsListMock.mockReturnValue({
        isLoading: false,
        isError: false,
        data: productMock,
      });

      renderComponentFactory(<ProductsList />);

      expect(screen.getByText("Producto: Banda Ancha")).toBeInTheDocument();
      expect(screen.getByText("Velocidad: 334")).toBeInTheDocument();
      expect(screen.getByText("gbData: 50")).toBeInTheDocument();
      expect(screen.getByText("Adquirido: enero-2024")).toBeInTheDocument();
    });
  });
});
