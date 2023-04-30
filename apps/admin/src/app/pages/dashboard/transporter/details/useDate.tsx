import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import {
  GetTransporterByIdAdminQuery,
  GetTransporterByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_TRANSPORTER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { transporterId } = useParams<{ transporterId: string }>();

  const {
    loading: getTransporterLoading,
    data: transporter,
    refetch,
  } = useQuery<
    GetTransporterByIdAdminQuery,
    GetTransporterByIdAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      transporterId: transporterId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    transporter: transporter?.getTransporterByIdAdmin,
    getTransporterLoading,
    transporterId: transporterId!,
    refetch,
  };
};

export default useData;
