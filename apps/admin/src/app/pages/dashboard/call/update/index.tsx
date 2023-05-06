import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const CallUpdatePage: FC = () => {
  const { getCallLoading, call, callId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getCallLoading,
        call,
        callId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default CallUpdatePage;
