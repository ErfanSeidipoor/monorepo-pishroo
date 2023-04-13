import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_PRODUCER_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetProducerByIdAdminQuery,
  GetProducerByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PRODUCER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { producerId } = useParams<{ producerId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER__PRODUCER,
            href: DASHBOARD_PRODUCER_ROUTE,
          },
          { label: TEXTS.PAGE_PRODUCER_UPDATE__UPDATE_PRODUCER },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getProducerLoading,
    data: producer,
    refetch,
  } = useQuery<
    GetProducerByIdAdminQuery,
    GetProducerByIdAdminQueryVariables
  >(QUERY_GET_PRODUCER_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      producerId: producerId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    producer: producer?.getProducerByIdAdmin,
    getProducerLoading,
    producerId: producerId!,
    refetch,
  };
};

export default useData;
