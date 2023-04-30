import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import {
  GetCustomerByIdAdminQuery,
  GetCustomerByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_CUSTOMER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { customerId } = useParams<{ customerId: string }>();

  const {
    loading: getCustomerLoading,
    data: customer,
    refetch,
  } = useQuery<GetCustomerByIdAdminQuery, GetCustomerByIdAdminQueryVariables>(
    QUERY_GET_CUSTOMER_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        customerId: customerId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    }
  );

  return {
    customer: customer?.getCustomerByIdAdmin,
    getCustomerLoading,
    customerId: customerId!,
    refetch,
  };
};

export default useData;
