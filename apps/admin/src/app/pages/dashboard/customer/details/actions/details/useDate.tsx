import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout, useCustomerDetails } from "@admin/hooks";
import {
  DASHBOARD_CUSTOMER_DETAILS,
  DASHBOARD_CUSTOMER_ACTION_ROUTE,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCustomerActionByIdAdminQuery,
  GetCustomerActionByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { url } from "@pishroo/utils";

import { QUERY_GET_CUSTOMER_ACTION_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { customerId, customer } = useCustomerDetails();
  const { enqueueSnackbar } = useSnackbar();
  const { customerActionId } = useParams<{ customerActionId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CUSTOMER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CUSTOMER__CUSTOMER,
            href: DASHBOARD_CUSTOMER_ROUTE,
          },
          {
            label: customer
              ? customer?.firstName + customer?.lastName
              : TEXTS.PAGE_CUSTOMER_UPDATE__UPDATE_CUSTOMER,
            href: customer
              ? url.generate(DASHBOARD_CUSTOMER_DETAILS, {
                  customerId: customer?.id,
                })
              : DASHBOARD_CUSTOMER_ROUTE,
          },
          {
            label: TEXTS.PAGE_CUSTOMER_ACTION__CUSTOMER_ACTION,
            href: url.generate(DASHBOARD_CUSTOMER_ACTION_ROUTE, { customerId }),
          },
          {
            label: TEXTS.PAGE_CUSTOMER_ACTION_UPDATE__PAGE_TITLE,
          },
        ],
      },
    });
  }, [setConfig, customer, customerId]);

  const {
    loading: getCustomerActionLoading,
    data: customerAction,
    refetch,
  } = useQuery<
    GetCustomerActionByIdAdminQuery,
    GetCustomerActionByIdAdminQueryVariables
  >(QUERY_GET_CUSTOMER_ACTION_BY_ID_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      customerActionId: customerActionId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    customerAction: customerAction?.getCustomerActionByIdAdmin,
    getCustomerActionLoading,
    customerActionId: customerActionId!,
    refetch,
  };
};

export default useData;
