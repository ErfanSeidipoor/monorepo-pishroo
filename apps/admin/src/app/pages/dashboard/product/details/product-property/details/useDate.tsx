import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout, useProductDetails } from "@admin/hooks";
import {
  DASHBOARD_PRODUCT_DETAILS,
  DASHBOARD_PRODUCT_PROPERTY_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProductPropertyByIdAdminQuery,
  GetProductPropertyByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { url } from "@pishroo/utils";

import { QUERY_GET_PRODUCT_PROPERTY_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { productId, product } = useProductDetails();
  const { enqueueSnackbar } = useSnackbar();
  const { productPropertyId } = useParams<{ productPropertyId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCT_PROPERTY__PAGE_TITLE,
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
            label: TEXTS.PAGE_PRODUCT_PROPERTY__PRODUCT_PROPERTY,
            href: url.generate(DASHBOARD_PRODUCT_PROPERTY_ROUTE, { productId }),
          },
          { label: TEXTS.PAGE_PRODUCT_PROPERTY_UPDATE__UPDATE_PRODUCT_PROPERTY },
        ],
      },
    });
  }, [setConfig, product, productId]);

  const {
    loading: getProductPropertyLoading,
    data: productProperty,
    refetch,
  } = useQuery<
    GetProductPropertyByIdAdminQuery,
    GetProductPropertyByIdAdminQueryVariables
  >(QUERY_GET_PRODUCT_PROPERTY_BY_ID_ADMIN, {
    variables: {
      productPropertyId: productPropertyId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    productProperty: productProperty?.getProductPropertyByIdAdmin,
    getProductPropertyLoading,
    productPropertyId: productPropertyId!,
    refetch,
  };
};

export default useData;
