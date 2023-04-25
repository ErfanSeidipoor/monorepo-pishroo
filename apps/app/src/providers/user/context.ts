import { createContext } from "react";
import { User } from "@app/gql/graphql";

export interface IUserContext {
  currentUser: Partial<User> | null;
  isLoading: boolean;
  isLogin: boolean;
  error: Error | null;
  logout: () => void;
  loginSuccess: (user: Partial<User>) => void;
  loginFailed: (error: Error) => void;
}

export default createContext<IUserContext>({
  currentUser: null,
  isLogin: false,
  isLoading: false,
  error: null,
  logout: () => undefined,
  loginSuccess: () => undefined,
  loginFailed: () => undefined,
});
