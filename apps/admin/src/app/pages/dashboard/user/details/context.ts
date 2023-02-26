import { GetUserByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IUserContext {
  user?: GetUserByIdAdminQuery["getUserByIdAdmin"];
  getUserLoading: boolean;
  userId: string;
  refetch: () => void;
}

export default createContext<IUserContext>({
  user: undefined,
  getUserLoading: true,
  userId: "",
  refetch: () => "",
});
