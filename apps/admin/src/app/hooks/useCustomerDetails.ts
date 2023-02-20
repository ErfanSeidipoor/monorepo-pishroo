import { useContext } from "react";
import context from "@admin/pages/dashboard/customer/update/context";

export const useCustomerDetails = () => useContext(context);
