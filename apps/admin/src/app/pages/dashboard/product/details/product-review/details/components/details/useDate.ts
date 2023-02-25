import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProductReviewAdminMutation,
  UpdateProductReviewAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProductDetails, useProductReviewDetails } from "@admin/hooks";

import { UpdateProductReviewAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PRODUCT_REVIEW_ADMIN } from "./gql";

const useData = () => {
  const { getProductReviewLoading, productReviewId, productReview } =
    useProductReviewDetails();

  const { productId } = useProductDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProductReviewAdminInputs>({
    resolver: classValidatorResolver(UpdateProductReviewAdminInputs),
    mode: "onChange",
    defaultValues: {
      productReviewId,
      reviewer: "",
      text: "",
      isActive: true,
      productId,
    },
  });

  useEffect(() => {
    if (productReview) {
      const { reviewer, text, isActive, fileUses } = productReview;
      const [fileUse] = fileUses;
      const {
        file: { id: fileId },
      } = fileUse;

      setValue("reviewer", reviewer || "");
      setValue("text", text || "");
      setValue("isActive", !!isActive);
      setValue("fileId", fileId);
      setValue("productId", productId);
    }
  }, [productId, productReview, setValue]);

  const [updateProductReviewAdmin, { loading: updateProductReviewLoading }] =
    useMutation<
      UpdateProductReviewAdminMutation,
      UpdateProductReviewAdminMutationVariables
    >(MUTATION_UPDATE_PRODUCT_REVIEW_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PRODUCT_REVIEW_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<UpdateProductReviewAdminInputs> = (
    updateProductReviewAdminInputs
  ) => {
    updateProductReviewAdmin({
      variables: {
        updateProductReviewAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProductReviewLoading || getProductReviewLoading,
  };
};

export default useData;
