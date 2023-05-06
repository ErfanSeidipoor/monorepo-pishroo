import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import {
  GetProducerByIdAdminQuery,
  GetProducerByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { producerId: string } }>();
  const { producerId } = route.params;

  const {
    loading: getProducerLoading,
    data: producer,
    refetch,
  } = useQuery<GetProducerByIdAdminQuery, GetProducerByIdAdminQueryVariables>(
    QUERY_GET_PRODUCER_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        producerId: producerId!,
      },
      onError: (error) => {
        console.log({ error });
        Alert.alert(error.message);
      },
    }
  );

  return {
    producer: producer?.getProducerByIdAdmin,
    getProducerLoading,
    producerId: producerId!,
    refetch,
  };
};

export default useData;
