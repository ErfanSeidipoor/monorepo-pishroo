import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProductAdminMutation,
  UpdateProductAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProductDetails } from "@admin/hooks";

import { UpdateProductAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PRODUCT_ADMIN } from "./gql";

const useData = () => {
  const { getProductLoading, productId, product } = useProductDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProductAdminInputs>({
    resolver: classValidatorResolver(UpdateProductAdminInputs),
    mode: "onChange",
    defaultValues: {
      productId,
      name: "",
      slug: "",
      text: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (product) {
      const { name, slug, text, isActive } = product;
      setValue("name", name);
      setValue("slug", slug);
      setValue("text", text);
      setValue("isActive", !!isActive);
    }
  }, [product, setValue]);

  const [updateProductAdmin, { loading: updateProductLoading }] = useMutation<
    UpdateProductAdminMutation,
    UpdateProductAdminMutationVariables
  >(MUTATION_UPDATE_PRODUCT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PRODUCT_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateProductAdminInputs> = (
    updateProductAdminInputs
  ) => {
    updateProductAdmin({ variables: { updateProductAdminInputs } });
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
