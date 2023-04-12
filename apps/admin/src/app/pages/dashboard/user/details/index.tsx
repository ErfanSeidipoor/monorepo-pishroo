import { FC } from "react";

import Details from "./components/details";
import Images from "./components/images";
import Provinces from "./components/provinces";
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
      <Images />
      <Provinces />
    </Context.Provider>
  );
};

export default UserUpdatePage;
