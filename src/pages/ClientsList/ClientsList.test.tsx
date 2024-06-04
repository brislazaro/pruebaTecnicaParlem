import { describe, test, expect, vi, Mock } from "vitest";
import { renderComponentFactory } from "../../testUtils";
import ClientsList from "./ClientsList";
import { Customer } from "../../types";
import { screen, fireEvent } from "@testing-library/react";
import useClientsList from "./useClientsList";

vi.mock("./useClientsList.ts");

describe("Given a ClientsList component", () => {
  test("Then should render the title", () => {
    (useClientsList as Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: [],
    });

    renderComponentFactory(<ClientsList />);

    expect(screen.getByText("Clientes")).toBeInTheDocument();
  });

  describe("When isLoading is true", () => {
    test("Then should print a skeleton component", () => {
      (useClientsList as Mock).mockReturnValue({
        isLoading: true,
        isError: false,
        data: [],
      });

      renderComponentFactory(<ClientsList />);

      expect(screen.getByTestId("clientsSkeleton")).toBeInTheDocument();
    });
  });

  describe("When isError is true", () => {
    test("Then should print an error message", () => {
      (useClientsList as Mock).mockReturnValue({
        isLoading: false,
        isError: true,
        data: [],
      });

      renderComponentFactory(<ClientsList />);

      expect(
        screen.getByText("❌ Error al cargar los clientes")
      ).toBeInTheDocument();
    });
  });

  describe("When isLoading and isError are false and data is an array of 2 customers", () => {
    const customerMock: Customer[] = [
      {
        _id: 567898,
        email: "gerard@gmail.com",
        givenName: "Gerard",
        familyName1: "Ramon",
        docType: "hghg",
        docNum: "hdfhfh",
        phone: "578687998",
        customerId: "576886",
      },
      {
        _id: 567895,
        email: "brisa@gmail.com",
        givenName: "Brisa",
        familyName1: "Lazaro",
        docType: "hghg",
        docNum: "hdfhfh",
        phone: "578687998",
        customerId: "576888",
      },
    ];

    test("Then should print 2 customer cards", () => {
      (useClientsList as Mock).mockReturnValue({
        isLoading: false,
        isError: false,
        data: customerMock,
      });

      renderComponentFactory(<ClientsList />);

      expect(screen.getAllByTestId("clientCard").length).toBe(2);
    });

    describe("And the user search for an unexisting name (asdfg) in the searchbox", () => {
      test('Then should print: No se encontraron clientes con el nombre "asdfg"', () => {
        (useClientsList as Mock).mockReturnValue({
          isLoading: false,
          isError: false,
          data: customerMock,
        });

        renderComponentFactory(<ClientsList />);

        const input = screen.getByPlaceholderText("Buscar por nombre");

        fireEvent.change(input, { target: { value: "asdfg" } });

        expect(
          screen.getByText('No se encontraron clientes con el nombre "asdfg"')
        ).toBeInTheDocument();
      });
    });

    describe("And one of the customer names is Brisa Lazaro, and the user search for Bri in the searchbox", () => {
      test("Then should only print 1 customer card with the name Brisa Lazaro", () => {
        (useClientsList as Mock).mockReturnValue({
          isLoading: false,
          isError: false,
          data: customerMock,
        });

        renderComponentFactory(<ClientsList />);

        const input = screen.getByPlaceholderText("Buscar por nombre");

        fireEvent.change(input, { target: { value: "Bri" } });

        expect(screen.getAllByTestId("clientCard").length).toBe(1);

        expect(screen.getByText("Brisa Lazaro")).toBeInTheDocument();
      });
    });
  });
});
