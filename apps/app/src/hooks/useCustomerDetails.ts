import { useContext } from "react";
import context from "@app/screens/customer/details/context";

export const useCustomerDetails = () => useContext(context);
