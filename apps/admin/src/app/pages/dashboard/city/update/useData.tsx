import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_CITY_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetCityByIdAdminQuery,
  GetCityByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_CITY_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { cityId } = useParams<{ cityId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CITY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CITY__CITY,
            href: DASHBOARD_CITY_ROUTE,
          },
          { label: TEXTS.PAGE_CITY_UPDATE__UPDATE_CITY },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getCityLoading,
    data: city,
    refetch,
  } = useQuery<GetCityByIdAdminQuery, GetCityByIdAdminQueryVariables>(
    QUERY_GET_CITY_BY_ID_ADMIN,
    {
      variables: {
        cityId: cityId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    }
  );

  return {
    city: city?.getCityByIdAdmin,
    getCityLoading,
    cityId: cityId!,
    refetch,
  };
};

export default useData;
