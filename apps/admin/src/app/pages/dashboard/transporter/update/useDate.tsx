import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_TRANSPORTER_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetTransporterByIdAdminQuery,
  GetTransporterByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_TRANSPORTER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { transporterId } = useParams<{ transporterId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER,
            href: DASHBOARD_TRANSPORTER_ROUTE,
          },
          { label: TEXTS.PAGE_TRANSPORTER_UPDATE__UPDATE_TRANSPORTER },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getTransporterLoading,
    data: transporter,
    refetch,
  } = useQuery<
    GetTransporterByIdAdminQuery,
    GetTransporterByIdAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_BY_ID_ADMIN, {
    variables: {
      transporterId: transporterId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    transporter: transporter?.getTransporterByIdAdmin,
    getTransporterLoading,
    transporterId: transporterId!,
    refetch,
  };
};

export default useData;
