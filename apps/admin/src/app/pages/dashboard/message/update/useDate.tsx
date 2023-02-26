import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import {
  DASHBOARD_MESSAGE_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetMessageByIdAdminQuery,
  GetMessageByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_MESSAGE_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { messageId } = useParams<{ messageId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_MESSAGE__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_MESSAGE__MESSAGE,
            href: DASHBOARD_MESSAGE_ROUTE,
          },
          {
            label:
              TEXTS.PAGE_MESSAGE_UPDATE__UPDATE_MESSAGE,
          },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getMessageLoading,
    data: message,
    refetch,
  } = useQuery<
    GetMessageByIdAdminQuery,
    GetMessageByIdAdminQueryVariables
  >(QUERY_GET_MESSAGE_BY_ID_ADMIN, {
    variables: {
      messageId: messageId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    message: message?.getMessageByIdAdmin,
    getMessageLoading,
    messageId: messageId!,
    refetch,
  };
};

export default useData;
