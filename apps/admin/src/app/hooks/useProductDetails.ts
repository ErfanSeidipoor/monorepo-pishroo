import { useContext } from "react";
import context from "@admin/pages/dashboard/product/update/context";

export const useProductDetails = () => useContext(context);
