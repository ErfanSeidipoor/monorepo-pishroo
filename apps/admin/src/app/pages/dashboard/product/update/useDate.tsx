import { useDashboardLayout } from "@admin/hooks";
import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_PRODUCT_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetProductByIdAdminQuery,
  GetProductByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PRODUCT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCT__PRODUCT,
            href: DASHBOARD_PRODUCT_ROUTE,
          },
          { label: TEXTS.PAGE_PRODUCT_UPDATE__UPDATE_PRODUCT },
        ],
      },
    });
  }, [setConfig]);

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
