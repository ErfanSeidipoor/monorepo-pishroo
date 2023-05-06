import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";

import {
  GetProducerAgentByIdAdminQuery,
  GetProducerAgentByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCER_AGENT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { producerAgentId: string } }>();
  const { producerAgentId } = route.params;

  const {
    loading: getProducerAgentLoading,
    data: producerAgent,
    refetch,
  } = useQuery<
    GetProducerAgentByIdAdminQuery,
    GetProducerAgentByIdAdminQueryVariables
  >(QUERY_GET_PRODUCER_AGENT_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      producerAgentId: producerAgentId!,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

  return {
    producerAgent: producerAgent?.getProducerAgentByIdAdmin,
    getProducerAgentLoading,
    producerAgentId: producerAgentId!,
    refetch,
  };
};

export default useData;
