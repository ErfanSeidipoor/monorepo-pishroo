import { GetProvinceByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProvinceContext {
  province?: GetProvinceByIdAdminQuery["getProvinceByIdAdmin"];
  getProvinceLoading: boolean;
  provinceId: string;
  refetch: () => void;
}

export default createContext<IProvinceContext>({
  province: undefined,
  getProvinceLoading: true,
  provinceId: "",
  refetch: () => "",
});
