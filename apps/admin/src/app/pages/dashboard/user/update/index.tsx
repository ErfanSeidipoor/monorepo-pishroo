import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const UserUpdatePage: FC = () => {
  const { getUserLoading, user, userId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getUserLoading,
        user,
        userId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default UserUpdatePage;
