import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdatePropertyOfProductAdminMutation,
  UpdatePropertyOfProductAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProductDetails, useProductPropertyDetails } from "@admin/hooks";

import { UpdatePropertyOfProductAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PROPERTY_OF_PRODUCT_ADMIN } from "./gql";

const useData = () => {
  const { getProductPropertyLoading, productPropertyId, productProperty } =
    useProductPropertyDetails();

  const { productId } = useProductDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdatePropertyOfProductAdminInputs>({
    resolver: classValidatorResolver(UpdatePropertyOfProductAdminInputs),
    mode: "onChange",
    defaultValues: {
      productPropertyId,
      value: "",
    },
  });

  useEffect(() => {
    if (productProperty) {
      const { value } = productProperty;
      setValue("value", value || "");
    }
  }, [productId, productProperty, setValue]);

  const [
    updatePropertyOfProductAdmin,
    { loading: updateProductPropertyLoading },
  ] = useMutation<
    UpdatePropertyOfProductAdminMutation,
    UpdatePropertyOfProductAdminMutationVariables
  >(MUTATION_UPDATE_PROPERTY_OF_PRODUCT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PRODUCT_PROPERTY_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdatePropertyOfProductAdminInputs> = (
    updatePropertyOfProductAdminInputs
  ) => {
    updatePropertyOfProductAdmin({
      variables: {
        updatePropertyOfProductAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProductPropertyLoading || getProductPropertyLoading,
  };
};

export default useData;
