import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_CUSTOMER_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetCustomerByIdAdminQuery,
  GetCustomerByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_CUSTOMER_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { customerId } = useParams<{ customerId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CUSTOMER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CUSTOMER__CUSTOMER,
            href: DASHBOARD_CUSTOMER_ROUTE,
          },
          { label: TEXTS.PAGE_CUSTOMER_UPDATE__UPDATE_CUSTOMER },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getCustomerLoading,
    data: customer,
    refetch,
  } = useQuery<GetCustomerByIdAdminQuery, GetCustomerByIdAdminQueryVariables>(
    QUERY_GET_CUSTOMER_BY_ID_ADMIN,
    {
      variables: {
        customerId: customerId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    }
  );

  return {
    customer: customer?.getCustomerByIdAdmin,
    getCustomerLoading,
    customerId: customerId!,
    refetch,
  };
};

export default useData;
