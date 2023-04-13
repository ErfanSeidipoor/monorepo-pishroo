import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import {
  DASHBOARD_PRODUCER_AGENT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProducerAgentByIdAdminQuery,
  GetProducerAgentByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PRODUCER_AGENT_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { producerAgentId } = useParams<{ producerAgentId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCER_AGENT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER_AGENT__PRODUCER_AGENT,
            href: DASHBOARD_PRODUCER_AGENT_ROUTE,
          },
          {
            label:
              TEXTS.PAGE_PRODUCER_AGENT_UPDATE__UPDATE_PRODUCER_AGENT,
          },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getProducerAgentLoading,
    data: producerAgent,
    refetch,
  } = useQuery<
    GetProducerAgentByIdAdminQuery,
    GetProducerAgentByIdAdminQueryVariables
  >(QUERY_GET_PRODUCER_AGENT_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      producerAgentId: producerAgentId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    producerAgent: producerAgent?.getProducerAgentByIdAdmin,
    getProducerAgentLoading,
    producerAgentId: producerAgentId!,
    refetch,
  };
};

export default useData;
