import { describe, test, expect, vi, Mock } from "vitest";
import { renderComponentFactory } from "../../../testUtils";
import ClientData from "./ClientData";
import { screen } from "@testing-library/react";
import useClientData from "./useClientData";
import { Customer } from "../../../types";

vi.mock("./useClientData.ts");

describe("Given a ClientsData component", () => {
  describe("When isLoading is true", () => {
    test("Then should render the skeleton component", () => {
      (useClientData as Mock).mockReturnValue({
        isLoading: true,
        isError: false,
        data: [],
      });

      renderComponentFactory(<ClientData />);

      expect(screen.getByTestId("clientsSkeleton")).toBeInTheDocument();
    });
  });

  describe("When isError is true ", () => {
    test("Then should print an error message", () => {
      (useClientData as Mock).mockReturnValue({
        isLoading: false,
        isError: true,
        data: [],
      });

      renderComponentFactory(<ClientData />);

      expect(
        screen.getByText("❌ Error al cargar el cliente")
      ).toBeInTheDocument();
    });
  });

  describe("When isError and isLoading are false and data is undefined ", () => {
    test("Then should print no client id message", () => {
      (useClientData as Mock).mockReturnValue({
        isLoading: false,
        isError: false,
        data: undefined,
      });

      renderComponentFactory(<ClientData />);

      expect(
        screen.getByText("❌ No se ha encontrado el cliente")
      ).toBeInTheDocument();
    });
  });

  describe("When isLoading and isError are false and data is an object", () => {
    test("Then should print a info customer", () => {
      const customerMock: Customer = {
        _id: 567898,
        email: "gerard@gmail.com",
        givenName: "Gerard",
        familyName1: "Ramon",
        docType: "nif",
        docNum: "hdfhfh",
        phone: "578687998",
        customerId: "576886",
      };

      (useClientData as Mock).mockReturnValue({
        isLoading: false,
        isError: false,
        data: customerMock,
      });

      renderComponentFactory(<ClientData />);

      expect(screen.getByText("Gerard Ramon")).toBeInTheDocument();
      expect(screen.getByText(": hdfhfh")).toBeInTheDocument();
      expect(screen.getByText("Email: gerard@gmail.com")).toBeInTheDocument();
      expect(screen.getByText("Telefono: 578687998")).toBeInTheDocument();
    });
  });
});
