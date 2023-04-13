import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_USER_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetUserByIdAdminQuery,
  GetUserByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_USER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_USER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_USER__USER,
            href: DASHBOARD_USER_ROUTE,
          },
          { label: TEXTS.PAGE_USER_UPDATE__UPDATE_USER },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getUserLoading,
    data: user,
    refetch,
  } = useQuery<GetUserByIdAdminQuery, GetUserByIdAdminQueryVariables>(
    QUERY_GET_USER_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        userId: userId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    }
  );

  return {
    user: user?.getUserByIdAdmin,
    getUserLoading,
    userId: userId!,
    refetch,
  };
};

export default useData;
