import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout, useProducerDetails } from "@admin/hooks";
import {
  DASHBOARD_PRODUCER_DETAILS,
  DASHBOARD_PRODUCER_ACTION_ROUTE,
  DASHBOARD_PRODUCER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProducerActionByIdAdminQuery,
  GetProducerActionByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { url } from "@pishroo/utils";

import { QUERY_GET_PRODUCER_ACTION_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { producerId, producer } = useProducerDetails();
  const { enqueueSnackbar } = useSnackbar();
  const { producerActionId } = useParams<{ producerActionId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER__PRODUCER,
            href: DASHBOARD_PRODUCER_ROUTE,
          },
          {
            label:
              producer?.name || TEXTS.PAGE_PRODUCER_UPDATE__UPDATE_PRODUCER,
            href: producer
              ? url.generate(DASHBOARD_PRODUCER_DETAILS, {
                  producerId: producer?.id,
                })
              : DASHBOARD_PRODUCER_ROUTE,
          },
          {
            label: TEXTS.PAGE_PRODUCER_ACTION__PRODUCER_ACTION,
            href: url.generate(DASHBOARD_PRODUCER_ACTION_ROUTE, {
              producerId,
            }),
          },
          {
            label: TEXTS.PAGE_PRODUCER_ACTION_UPDATE__PAGE_TITLE,
          },
        ],
      },
    });
  }, [setConfig, producer, producerId]);

  const {
    loading: getProducerActionLoading,
    data: producerAction,
    refetch,
  } = useQuery<
    GetProducerActionByIdAdminQuery,
    GetProducerActionByIdAdminQueryVariables
  >(QUERY_GET_PRODUCER_ACTION_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      producerActionId: producerActionId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    producerAction: producerAction?.getProducerActionByIdAdmin,
    getProducerActionLoading,
    producerActionId: producerActionId!,
    refetch,
  };
};

export default useData;
