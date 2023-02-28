import { useContext } from "react";
import context from "@admin/pages/dashboard/product/details/product-property/details/context";

export const useProductPropertyDetails = () => useContext(context);
