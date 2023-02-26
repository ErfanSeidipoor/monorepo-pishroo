import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  AddCategoriesToProductAdminMutation,
  AddCategoriesToProductAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProductDetails } from "@admin/hooks";

import { AddCategoriesToProductAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_ADD_COLORS_TO_ADMIN } from "./gql";

const useData = () => {
  const { getProductLoading, productId, product } = useProductDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<AddCategoriesToProductAdminInputs>({
    resolver: classValidatorResolver(AddCategoriesToProductAdminInputs),
    mode: "onChange",
    defaultValues: {
      productId,
      categoryIds: [],
    },
  });

  useEffect(() => {
    if (product) {
      const { productCategories } = product;
      const categoryIds = productCategories?.map(
        ({ categoryId }) => categoryId
      );
      setValue("categoryIds", categoryIds || []);
    }
  }, [product, setValue]);

  const [addCategoriesToProduct, { loading: updateProductLoading }] =
    useMutation<
      AddCategoriesToProductAdminMutation,
      AddCategoriesToProductAdminMutationVariables
    >(MUTATION_ADD_COLORS_TO_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PRODUCT_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<AddCategoriesToProductAdminInputs> = (
    addCategoriesToProductAdminInputs
  ) => {
    addCategoriesToProduct({
      variables: { addCategoriesToProductAdminInputs },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProductLoading || getProductLoading,
  };
};

export default useData;
