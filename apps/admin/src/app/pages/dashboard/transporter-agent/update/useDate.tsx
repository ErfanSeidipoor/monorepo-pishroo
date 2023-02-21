import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import {
  DASHBOARD_TRANSPORTER_AGENT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetTransporterAgentByIdAdminQuery,
  GetTransporterAgentByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_TRANSPORTER_AGENT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { transporterAgentId } = useParams<{ transporterAgentId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER_AGENT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER_AGENT__TRANSPORTER_AGENT,
            href: DASHBOARD_TRANSPORTER_AGENT_ROUTE,
          },
          {
            label:
              TEXTS.PAGE_TRANSPORTER_AGENT_UPDATE__UPDATE_TRANSPORTER_AGENT,
          },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getTransporterAgentLoading,
    data: transporterAgent,
    refetch,
  } = useQuery<
    GetTransporterAgentByIdAdminQuery,
    GetTransporterAgentByIdAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_AGENT_BY_ID_ADMIN, {
    variables: {
      transporterAgentId: transporterAgentId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    transporterAgent: transporterAgent?.getTransporterAgentByIdAdmin,
    getTransporterAgentLoading,
    transporterAgentId: transporterAgentId!,
    refetch,
  };
};

export default useData;
