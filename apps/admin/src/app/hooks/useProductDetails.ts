import { useContext } from "react";
import context from "@admin/pages/dashboard/product/details/context";

export const useProductDetails = () => useContext(context);
