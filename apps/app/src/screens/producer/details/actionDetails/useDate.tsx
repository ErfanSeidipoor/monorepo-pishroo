import { useQuery } from "@apollo/client";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  GetProducerActionByIdAdminQuery,
  GetProducerActionByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCER_ACTION_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { producerActionId: string } }>();
  const { producerActionId } = route.params;

  const {
    loading: getProducerActionLoading,
    data: producerAction,
    refetch,
  } = useQuery<
    GetProducerActionByIdAdminQuery,
    GetProducerActionByIdAdminQueryVariables
  >(QUERY_GET_PRODUCER_ACTION_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      producerActionId: producerActionId!,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

  return {
    producerAction: producerAction?.getProducerActionByIdAdmin,
    getProducerActionLoading,
    producerActionId: producerActionId!,
    refetch,
  };
};

export default useData;
