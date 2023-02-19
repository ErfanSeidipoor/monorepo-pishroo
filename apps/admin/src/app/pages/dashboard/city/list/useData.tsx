import { useDashboardLayout } from "@admin/hooks";
import { useQuery } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { GetCitiesAdminArgs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_CITY_DETAILS,
  DASHBOARD_CITY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCitiesAdminArgsGql,
  GetCitiesAdminQuery,
  GetCitiesAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";

import { QUERY_GET_CITIES_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetCitiesAdminQuery["getCitiesAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => ({
    name: searchParams.get("name") || "",
    provinceId: searchParams.get("provinceId") || undefined,
  });

  const [pageInfo, setPageInfo] =
    useState<GetCitiesAdminQuery["getCitiesAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetCitiesAdminArgsGql>({
    ...convertSearchParamsToArgs(searchParams),
  });

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: Number(searchParams.get("page")) || 1,
  });

  const {
    handleSubmit: handleSubmitFilter,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<GetCitiesAdminArgs>({
    resolver: classValidatorResolver(GetCitiesAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
      provinceId: queryArgs.provinceId || undefined,
    },
  });

  const { loading } = useQuery<
    GetCitiesAdminQuery,
    GetCitiesAdminQueryVariables
  >(QUERY_GET_CITIES_ADMIN, {
    variables: {
      getCitiesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getCitiesAdmin }) => {
      setRows(getCitiesAdmin?.edges);
      setPageInfo(getCitiesAdmin?.pageInfo);
    },
  });

  useEffect(() => {
    setPaginationArgs({
      page: Number(searchParams.get("page")) || 1,
    });
    setQueryArgs({
      ...convertSearchParamsToArgs(searchParams),
    });
  }, [searchParams]);

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_CITY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_CITY__CITY },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetCitiesAdminArgs> = (
    loginAdminInputs
  ) => {
    navigate(url.generate(DASHBOARD_CITY_ROUTE, {}, loginAdminInputs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_CITY_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
      provinceId: "",
    });
    navigate(url.generate(DASHBOARD_CITY_ROUTE, {}, {}));
  };

  const onEdit = (cityId: string) => {
    navigate(url.generate(DASHBOARD_CITY_DETAILS, { cityId }));
  };

  return {
    pageInfo,
    rows,
    navigate,
    loading,
    paginationArgs,
    handleSubmitFilter,
    onSubmitFilter,
    onClearFilter,
    control,
    errors,
    isValid,
    onPageSelect,
    onEdit,
    activationItem,
    setActivationItem,
  };
};

export default useData;
