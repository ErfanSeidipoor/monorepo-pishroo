import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import {
  GetTransporterByIdAdminQuery,
  GetTransporterByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_TRANSPORTER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { transporterId: string } }>();
  const { transporterId } = route.params;

  const {
    loading: getTransporterLoading,
    data: transporter,
    refetch,
  } = useQuery<GetTransporterByIdAdminQuery, GetTransporterByIdAdminQueryVariables>(
    QUERY_GET_TRANSPORTER_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        transporterId: transporterId!,
      },
      onError: (error) => {
        console.log({ error });
        Alert.alert(error.message);
      },
    }
  );

  return {
    transporter: transporter?.getTransporterByIdAdmin,
    getTransporterLoading,
    transporterId: transporterId!,
    refetch,
  };
};

export default useData;
