import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import {
  DASHBOARD_CATEGORY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCategoryByIdAdminQuery,
  GetCategoryByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_CATEGORY_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CATEGORY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CATEGORY__CATEGORY,
            href: DASHBOARD_CATEGORY_ROUTE,
          },
          {
            label:
              TEXTS.PAGE_CATEGORY_UPDATE__UPDATE_CATEGORY,
          },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getCategoryLoading,
    data: category,
    refetch,
  } = useQuery<
    GetCategoryByIdAdminQuery,
    GetCategoryByIdAdminQueryVariables
  >(QUERY_GET_CATEGORY_BY_ID_ADMIN, {
    variables: {
      categoryId: categoryId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    category: category?.getCategoryByIdAdmin,
    getCategoryLoading,
    categoryId: categoryId!,
    refetch,
  };
};

export default useData;
