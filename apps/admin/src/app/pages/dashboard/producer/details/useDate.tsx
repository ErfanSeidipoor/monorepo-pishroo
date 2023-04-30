import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import {
  GetProducerByIdAdminQuery,
  GetProducerByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PRODUCER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { producerId } = useParams<{ producerId: string }>();

  const {
    loading: getProducerLoading,
    data: producer,
    refetch,
  } = useQuery<
    GetProducerByIdAdminQuery,
    GetProducerByIdAdminQueryVariables
  >(QUERY_GET_PRODUCER_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      producerId: producerId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    producer: producer?.getProducerByIdAdmin,
    getProducerLoading,
    producerId: producerId!,
    refetch,
  };
};

export default useData;
