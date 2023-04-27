import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import {
  GetCustomerByIdAdminQuery,
  GetCustomerByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_CUSTOMER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { customerId: string } }>();
  const { customerId } = route.params;

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
        console.log({ error });
        Alert.alert(error.message);
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
