import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useData";

export const CityUpdatePage: FC = () => {
  const { getCityLoading, city, cityId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getCityLoading,
        city,
        cityId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default CityUpdatePage;
