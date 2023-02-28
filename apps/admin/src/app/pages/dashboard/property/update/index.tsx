import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const PropertyUpdatePage: FC = () => {
  const { getPropertyLoading, property, propertyId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getPropertyLoading,
        property,
        propertyId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default PropertyUpdatePage;
