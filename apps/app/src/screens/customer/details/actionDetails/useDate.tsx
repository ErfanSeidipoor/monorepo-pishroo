import { useQuery } from "@apollo/client";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  GetCustomerActionByIdAdminQuery,
  GetCustomerActionByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_CUSTOMER_ACTION_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { customerActionId: string } }>();
  const { customerActionId } = route.params;

  const {
    loading: getCustomerActionLoading,
    data: customerAction,
    refetch,
  } = useQuery<
    GetCustomerActionByIdAdminQuery,
    GetCustomerActionByIdAdminQueryVariables
  >(QUERY_GET_CUSTOMER_ACTION_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      customerActionId: customerActionId!,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

  return {
    customerAction: customerAction?.getCustomerActionByIdAdmin,
    getCustomerActionLoading,
    customerActionId: customerActionId!,
    refetch,
  };
};

export default useData;
