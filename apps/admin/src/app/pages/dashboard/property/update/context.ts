import { GetPropertyByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IPropertyContext {
  property?: GetPropertyByIdAdminQuery["getPropertyByIdAdmin"];
  getPropertyLoading: boolean;
  propertyId: string;
  refetch: () => void;
}

export default createContext<IPropertyContext>({
  property: undefined,
  getPropertyLoading: true,
  propertyId: "",
  refetch: () => "",
});
