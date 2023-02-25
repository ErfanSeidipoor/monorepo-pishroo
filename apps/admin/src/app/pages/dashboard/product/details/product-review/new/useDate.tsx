import { useDashboardLayout, useProductDetails } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_REVIEW_DETAILS,
  DASHBOARD_PRODUCT_REVIEW_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProductReviewAdminMutation,
  CreateProductReviewAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProductReviewAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PRODUCT_REVIEW_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { productId, product } = useProductDetails();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProductReviewAdminInputs>({
    resolver: classValidatorResolver(CreateProductReviewAdminInputs),
    mode: "onChange",
    defaultValues: {
      fileId: "",
      text: "",
      isActive: true,
      reviewer: "",
      productId,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCT_REVIEW__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCT__PRODUCT,
            href: DASHBOARD_PRODUCT_ROUTE,
          },
          {
            label: product
              ? product?.name
              : TEXTS.PAGE_PRODUCT_UPDATE__UPDATE_PRODUCT,
            href: product
              ? url.generate(DASHBOARD_PRODUCT_DETAILS, {
                  productId: product?.id,
                })
              : DASHBOARD_PRODUCT_ROUTE,
          },
          {
            label: TEXTS.PAGE_PRODUCT_REVIEW__PRODUCT_REVIEW,
            href: url.generate(DASHBOARD_PRODUCT_REVIEW_ROUTE, { productId }),
          },
          { label: TEXTS.PAGE_NEW_PRODUCT_REVIEW__NEW_PRODUCT_REVIEW },
        ],
      },
    });
  }, [setConfig, product, productId]);

  const [createProductReviewAdmin, { loading }] = useMutation<
    CreateProductReviewAdminMutation,
    CreateProductReviewAdminMutationVariables
  >(MUTATION_CREATE_PRODUCT_REVIEW_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProductReviewAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCT_REVIEW__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_PRODUCT_REVIEW_DETAILS, {
          productId,
          productReviewId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateProductReviewAdminInputs> = (
    createProductReviewAdminInputs
  ) => {
    createProductReviewAdmin({
      variables: {
        createProductReviewAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading,
  };
};

export default useData;
