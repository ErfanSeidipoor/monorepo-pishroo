import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { User } from "@app/gql/graphql";
import { MeAdminQuery } from "@app/gql/graphql";
import Context from "./context";
import { useQuery } from "@apollo/client";
import { QUERY_ME_ADMIN } from "./gql";

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(!!token);
  const [isLoading, setIsLoading] = useState(!token);
  const [currentUser, setCurrentUser] = useState<Partial<User> | null>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getToken = async () => {
      setToken(await AsyncStorage.getItem("TOKEN"));
    };
    getToken();
  }, [setToken]);

  const logout = async () => {
    ("");
  };

  const { loading } = useQuery<MeAdminQuery>(QUERY_ME_ADMIN, {
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      loginFailed(error);
      console.log({ error });
    },
    onCompleted: ({ meAdmin }) => {
      console.log({ error });
      loginSuccess(meAdmin);
    },
  });

  const loginSuccess = (user: Partial<User>) => {
    setIsLogin(false);
    setCurrentUser(user);
  };

  const loginFailed = (error: Error) => {
    setError(error);
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <Context.Provider
      value={{
        isLogin,
        isLoading,
        logout,
        currentUser,
        error,
        loginFailed,
        loginSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
};
