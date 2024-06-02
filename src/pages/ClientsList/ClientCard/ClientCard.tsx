import { FC } from "react";
import { Customer } from "../../../types";
import { NavLink } from "react-router-dom";

export type ClientCard = {
  customer: Customer;
};

const ClientCard: FC<ClientCard> = ({ customer }) => {
  return (
    <li
      className="py-4 flex flex-col gap-3 text-white hover:cursor-pointer hover:text-yellow"
      data-testid="clientCard"
    >
      <NavLink to={`/detail/${customer.customerId}`}>
        <p className="text-base font-semibold ">ID: {customer._id}</p>
        <div>
          <p className="text-sm font-medium truncate ">
            {customer.givenName} {customer.familyName1}
          </p>
          <p className="text-sm truncate text-gray-400">{customer.email}</p>
        </div>
      </NavLink>
    </li>
  );
};
export default ClientCard;
