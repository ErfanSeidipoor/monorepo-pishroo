import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import {
  GetProductByIdAdminQuery,
  GetProductByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_PRODUCT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { productId: string } }>();
  const { productId } = route.params;

  const {
    loading: getProductLoading,
    data: product,
    refetch,
  } = useQuery<GetProductByIdAdminQuery, GetProductByIdAdminQueryVariables>(
    QUERY_GET_PRODUCT_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        productId: productId!,
      },
      onError: (error) => {
        Alert.alert(error.message);
      },
    }
  );

  return {
    product: product?.getProductByIdAdmin,
    getProductLoading,
    productId: productId!,
    refetch,
  };
};

export default useData;
