import { FC } from "react";
import { CustomerProps } from "../../types";

const ClientsCard: FC<CustomerProps> = ({ customer }) => {
  return (
    <li className="py-3 sm:py-4 " key={customer._id}>
      <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{`ID:${customer._id}`}</p>
      <div className="flex-1 min-w-0 ms-4 ">
        <div className="flex gap-3">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {customer.givenName}
          </p>
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {customer.familyName1}
          </p>
        </div>
        <p className="ext-sm text-gray-500 truncate dark:text-gray-400">
          {customer.email}
        </p>
      </div>
    </li>
  );
};
export default ClientsCard;
