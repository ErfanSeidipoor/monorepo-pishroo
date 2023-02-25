import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  AddColorsToProductAdminMutation,
  AddColorsToProductAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProductDetails } from "@admin/hooks";

import { AddColorsToProductAdminInputs } from "@pishroo/dto";
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
  } = useForm<AddColorsToProductAdminInputs>({
    resolver: classValidatorResolver(AddColorsToProductAdminInputs),
    mode: "onChange",
    defaultValues: {
      productId,
      colorIds: [],
    },
  });

  useEffect(() => {
    if (product) {
      const { productColors } = product;
      const colorIds = productColors?.map(({ colorId }) => colorId);
      setValue("colorIds", colorIds || []);
    }
  }, [product, setValue]);

  const [addColorsToProduct, { loading: updateProductLoading }] = useMutation<
    AddColorsToProductAdminMutation,
    AddColorsToProductAdminMutationVariables
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

  const onSubmit: SubmitHandler<AddColorsToProductAdminInputs> = (
    addColorsToProductAdminInputs
  ) => {
    addColorsToProduct({
      variables: { addColorsToProductAdminInputs },
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
