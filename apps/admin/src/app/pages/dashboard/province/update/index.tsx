import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProvinceUpdatePage: FC = () => {
  const { getProvinceLoading, province, provinceId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProvinceLoading,
        province,
        provinceId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default ProvinceUpdatePage;
