import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import {
  GetProductByIdAdminQuery,
  GetProductByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PRODUCT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { productId } = useParams<{ productId: string }>();

  const {
    loading: getProductLoading,
    data: product,
    refetch,
  } = useQuery<GetProductByIdAdminQuery, GetProductByIdAdminQueryVariables>(
    QUERY_GET_PRODUCT_BY_ID_ADMIN,
    {
      variables: {
        productId: productId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
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
