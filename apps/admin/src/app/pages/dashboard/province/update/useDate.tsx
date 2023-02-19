import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TEXTS from "@pishroo/texts";

import { useDashboardLayout } from "@admin/hooks";
import { DASHBOARD_PROVINCE_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";
import {
  GetProvinceByIdAdminQuery,
  GetProvinceByIdAdminQueryVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_PROVINCE_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { enqueueSnackbar } = useSnackbar();
  const { provinceId } = useParams<{ provinceId: string }>();

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROVINCE__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROVINCE__PROVINCE,
            href: DASHBOARD_PROVINCE_ROUTE,
          },
          { label: TEXTS.PAGE_PROVINCE_UPDATE__UPDATE_PROVINCE },
        ],
      },
    });
  }, [setConfig]);

  const {
    loading: getProvinceLoading,
    data: province,
    refetch,
  } = useQuery<GetProvinceByIdAdminQuery, GetProvinceByIdAdminQueryVariables>(
    QUERY_GET_PROVINCE_BY_ID_ADMIN,
    {
      variables: {
        provinceId: provinceId!,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
    }
  );

  return {
    province: province?.getProvinceByIdAdmin,
    getProvinceLoading,
    provinceId: provinceId!,
    refetch,
  };
};

export default useData;
