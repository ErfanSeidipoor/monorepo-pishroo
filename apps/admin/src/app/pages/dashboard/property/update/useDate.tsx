import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import {
  DASHBOARD_PROPERTY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetPropertyByIdAdminQuery,
  GetPropertyByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PROPERTY_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { propertyId } = useParams<{ propertyId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROPERTY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROPERTY__PROPERTY,
            href: DASHBOARD_PROPERTY_ROUTE,
          },
          {
            label:
              TEXTS.PAGE_PROPERTY_UPDATE__UPDATE_PROPERTY,
          },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getPropertyLoading,
    data: property,
    refetch,
  } = useQuery<
    GetPropertyByIdAdminQuery,
    GetPropertyByIdAdminQueryVariables
  >(QUERY_GET_PROPERTY_BY_ID_ADMIN, {
    variables: {
      propertyId: propertyId!,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    property: property?.getPropertyByIdAdmin,
    getPropertyLoading,
    propertyId: propertyId!,
    refetch,
  };
};

export default useData;
