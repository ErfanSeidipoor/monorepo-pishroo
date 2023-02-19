import { GetCityByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface ICityContext {
  city?: GetCityByIdAdminQuery["getCityByIdAdmin"];
  getCityLoading: boolean;
  cityId: string;
  refetch: () => void;
}

export default createContext<ICityContext>({
  city: undefined,
  getCityLoading: true,
  cityId: "",
  refetch: () => "",
});
