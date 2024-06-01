import { describe, test, expect, vi, Mock } from "vitest";
import { renderComponentFactory } from "../../testUtils";
import ClientsList from "./ClientsList";
import { Customer } from "../../types";
import { screen } from "@testing-library/react";
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

  describe("When isloadin and isError are false and data is an array of 2 customers", () => {
    test("Then should print 2 customer cards", () => {
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
          email: "gerard@gmail.com",
          givenName: "Gerard",
          familyName1: "Ramon",
          docType: "hghg",
          docNum: "hdfhfh",
          phone: "578687998",
          customerId: "576888",
        },
      ];

      (useClientsList as Mock).mockReturnValue({
        isLoading: false,
        isError: false,
        data: customerMock,
      });

      renderComponentFactory(<ClientsList />);

      expect(screen.getAllByTestId("clientCard").length).toBe(2);
    });
  });
});
