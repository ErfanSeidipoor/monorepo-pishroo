import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import {
  AddImageToProductAdminMutation,
  AddImageToProductAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProductDetails } from "@admin/hooks";

import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_IMAGE_TO_PRODUCT } from "./gql";

const useData = () => {
  const { getProductLoading, productId, refetch, product } =
    useProductDetails();
  const { enqueueSnackbar } = useSnackbar();

  const [addImageToProductAdmin, { loading: updateProductLoading }] =
    useMutation<
      AddImageToProductAdminMutation,
      AddImageToProductAdminMutationVariables
    >(MUTATION_ADD_IMAGE_TO_PRODUCT, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PRODUCT_UPDATE__SUCCESS, {
          variant: "success",
        });
        refetch();
      },
    });

  const onSubmit = (fileId: string) => {
    addImageToProductAdmin({
      variables: { addImageToProductAdmin: { fileId, productId } },
    });
  };

  return {
    onSubmit,
    product,
    loading: updateProductLoading || getProductLoading,
    refetch,
  };
};

export default useData;
