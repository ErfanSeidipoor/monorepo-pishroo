import { useDashboardLayout } from "@admin/hooks";
import { useEffect, useState } from "react";

import { DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetProductsAdminArgsGql,
  GetProductsAdminQuery,
  GetProductsAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";
import { useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { useSnackbar } from "notistack";

import { QUERY_GET_PRODUCTS_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();

  const [rows, setRows] = useState<
    GetProductsAdminQuery["getProductsAdmin"]["edges"]
  >([]);
  const [args, setArgs] = useState<GetProductsAdminArgsGql>({});

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_PRODUCT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PRODUCT__PRODUCT },
        ],
      },
    });
  }, [setConfig]);

  const { loading } = useQuery<
    GetProductsAdminQuery,
    GetProductsAdminQueryVariables
  >(QUERY_GET_PRODUCTS_ADMIN, {
    variables: { getProductsAdminArgs: args, paginationArgs: paginationArgs },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProductsAdmin }) => {
      setRows(getProductsAdmin?.edges);
    },
  });

  return {
    rows,
    loading,
  };
};

export default useData;
