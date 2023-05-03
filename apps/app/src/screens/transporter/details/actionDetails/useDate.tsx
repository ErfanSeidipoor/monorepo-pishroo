import { useQuery } from "@apollo/client";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  GetTransporterActionByIdAdminQuery,
  GetTransporterActionByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_TRANSPORTER_ACTION_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { transporterActionId: string } }>();
  const { transporterActionId } = route.params;

  const {
    loading: getTransporterActionLoading,
    data: transporterAction,
    refetch,
  } = useQuery<
    GetTransporterActionByIdAdminQuery,
    GetTransporterActionByIdAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_ACTION_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      transporterActionId: transporterActionId!,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

  return {
    transporterAction: transporterAction?.getTransporterActionByIdAdmin,
    getTransporterActionLoading,
    transporterActionId: transporterActionId!,
    refetch,
  };
};

export default useData;
