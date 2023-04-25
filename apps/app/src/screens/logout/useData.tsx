// import { useSnackbar } from "notistack";
import { useQuery } from "@apollo/client";
import { Alert } from "react-native";

import { LogoutAdminQuery } from "@app/gql/graphql";
import { useUser } from "@app/hooks";
import TEXTS from "libs/texts/src";

import { QUERY_LOGOUT_ADMIN } from "./gql";

const useData = () => {
  const { logout } = useUser();

  const { refetch, loading } = useQuery<LogoutAdminQuery>(QUERY_LOGOUT_ADMIN, {
    fetchPolicy: "standby",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      Alert.alert(error.message);
      console.log({ error });
    },
    onCompleted: () => {
      Alert.alert(TEXTS.APP_SCREEN_LOGOUT__SUCCESS);
      logout();
    },
  });

  const onSubmit = () => {
    refetch();
  };

  return {
    onSubmit,
    loading,
  };
};

export default useData;
