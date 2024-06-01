import { describe, test, expect } from "vitest";
import { renderComponentFactory } from "../../../testUtils";
import ClientCard from "./ClientCard";
import { Customer } from "../../../types";
import { screen } from "@testing-library/react";

describe("Given a ClientCard component", () => {
  const customerMock: Customer = {
    _id: 567898,
    email: "gerard@gmail.com",
    givenName: "Gerard",
    familyName1: "Ramon",
    docType: "hghg",
    docNum: "hdfhfh",
    phone: "578687998",
    customerId: "576886",
  };

  describe("When it receives a customer", () => {
    test("Then should print an id, full name and email", () => {
      renderComponentFactory(<ClientCard customer={customerMock} />);

      expect(screen.getByText("ID: 567898")).toBeInTheDocument();
      expect(screen.getByText("Gerard Ramon")).toBeInTheDocument();
      expect(screen.getByText("gerard@gmail.com")).toBeInTheDocument();
    });
  });
});
