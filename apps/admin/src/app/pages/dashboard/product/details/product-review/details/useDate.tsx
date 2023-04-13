import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout, useProductDetails } from "@admin/hooks";
import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_REVIEW_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProductReviewByIdAdminQuery,
  GetProductReviewByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { url } from "@pishroo/utils";

import { QUERY_GET_PRODUCT_REVIEW_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { productId, product } = useProductDetails();
  const { enqueueSnackbar } = useSnackbar();
  const { productReviewId } = useParams<{ productReviewId: string }>();

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
          { label: TEXTS.PAGE_PRODUCT_REVIEW_UPDATE__UPDATE_PRODUCT_REVIEW },
        ],
      },
    });
  }, [setConfig, product, productId]);

  const {
    loading: getProductReviewLoading,
    data: productReview,
    refetch,
  } = useQuery<
    GetProductReviewByIdAdminQuery,
    GetProductReviewByIdAdminQueryVariables
  >(QUERY_GET_PRODUCT_REVIEW_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      productReviewId: productReviewId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    productReview: productReview?.getProductReviewByIdAdmin,
    getProductReviewLoading,
    productReviewId: productReviewId!,
    refetch,
  };
};

export default useData;
