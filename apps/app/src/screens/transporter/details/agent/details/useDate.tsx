import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";

import {
  GetTransporterAgentByIdAdminQuery,
  GetTransporterAgentByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_TRANSPORTER_AGENT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { transporterAgentId: string } }>();
  const { transporterAgentId } = route.params;

  const {
    loading: getTransporterAgentLoading,
    data: transporterAgent,
    refetch,
  } = useQuery<
    GetTransporterAgentByIdAdminQuery,
    GetTransporterAgentByIdAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_AGENT_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      transporterAgentId: transporterAgentId!,
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

  return {
    transporterAgent: transporterAgent?.getTransporterAgentByIdAdmin,
    getTransporterAgentLoading,
    transporterAgentId: transporterAgentId!,
    refetch,
  };
};

export default useData;
