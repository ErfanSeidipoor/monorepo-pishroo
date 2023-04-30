import { useContext } from "react";
import context from "@admin/pages/dashboard/customer/details/context";

export const useCustomerDetails = () => useContext(context);
