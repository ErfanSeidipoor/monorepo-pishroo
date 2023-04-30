import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout, useTransporterDetails } from "@admin/hooks";
import {
  DASHBOARD_TRANSPORTER_DETAILS,
  DASHBOARD_TRANSPORTER_ACTION_ROUTE,
  DASHBOARD_TRANSPORTER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetTransporterActionByIdAdminQuery,
  GetTransporterActionByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { url } from "@pishroo/utils";

import { QUERY_GET_TRANSPORTER_ACTION_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { transporterId, transporter } = useTransporterDetails();
  const { enqueueSnackbar } = useSnackbar();
  const { transporterActionId } = useParams<{ transporterActionId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER,
            href: DASHBOARD_TRANSPORTER_ROUTE,
          },
          {
            label: transporter
              ? transporter?.name
              : TEXTS.PAGE_TRANSPORTER_UPDATE__UPDATE_TRANSPORTER,
            href: transporter
              ? url.generate(DASHBOARD_TRANSPORTER_DETAILS, {
                  transporterId: transporter?.id,
                })
              : DASHBOARD_TRANSPORTER_ROUTE,
          },
          {
            label: TEXTS.PAGE_TRANSPORTER_ACTION__TRANSPORTER_ACTION,
            href: url.generate(DASHBOARD_TRANSPORTER_ACTION_ROUTE, {
              transporterId,
            }),
          },
          {
            label: TEXTS.PAGE_TRANSPORTER_ACTION_UPDATE__PAGE_TITLE,
          },
        ],
      },
    });
  }, [setConfig, transporter, transporterId]);

  const {
    loading: getTransporterActionLoading,
    data: transporterAction,
    refetch,
  } = useQuery<
    GetTransporterActionByIdAdminQuery,
    GetTransporterActionByIdAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_ACTION_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      transporterActionId: transporterActionId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    transporterAction: transporterAction?.getTransporterActionByIdAdmin,
    getTransporterActionLoading,
    transporterActionId: transporterActionId!,
    refetch,
  };
};

export default useData;
