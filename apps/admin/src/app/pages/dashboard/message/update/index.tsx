import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const MessageUpdatePage: FC = () => {
  const { getMessageLoading, message, messageId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getMessageLoading,
        message,
        messageId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default MessageUpdatePage;
