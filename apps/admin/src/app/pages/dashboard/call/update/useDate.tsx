import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import {
  DASHBOARD_CALL_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCallByIdAdminQuery,
  GetCallByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_CALL_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { callId } = useParams<{ callId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CALL__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CALL__CALL,
            href: DASHBOARD_CALL_ROUTE,
          },
          {
            label:
              TEXTS.PAGE_CALL_UPDATE__UPDATE_CALL,
          },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getCallLoading,
    data: call,
    refetch,
  } = useQuery<
    GetCallByIdAdminQuery,
    GetCallByIdAdminQueryVariables
  >(QUERY_GET_CALL_BY_ID_ADMIN, {
    variables: {
      callId: callId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    call: call?.getCallByIdAdmin,
    getCallLoading,
    callId: callId!,
    refetch,
  };
};

export default useData;
