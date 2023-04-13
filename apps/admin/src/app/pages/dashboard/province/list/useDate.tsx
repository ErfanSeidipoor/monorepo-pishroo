import { useDashboardLayout } from "@admin/hooks";
import { useQuery } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { GetProvincesAdminArgs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PROVINCE_DETAILS,
  DASHBOARD_PROVINCE_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProvincesAdminArgsGql,
  GetProvincesAdminQuery,
  GetProvincesAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";

import { QUERY_GET_PROVINCES_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProvincesAdminQuery["getProvincesAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => ({
    name: searchParams.get("name") || "",
  });

  const [pageInfo, setPageInfo] =
    useState<GetProvincesAdminQuery["getProvincesAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetProvincesAdminArgsGql>({
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
  } = useForm<GetProvincesAdminArgs>({
    resolver: classValidatorResolver(GetProvincesAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
    },
  });

  const { loading } = useQuery<
    GetProvincesAdminQuery,
    GetProvincesAdminQueryVariables
  >(QUERY_GET_PROVINCES_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProvincesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProvincesAdmin }) => {
      setRows(getProvincesAdmin?.edges);
      setPageInfo(getProvincesAdmin?.pageInfo);
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
      pageName: TEXTS.PAGE_PROVINCE__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PROVINCE__PROVINCE },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetProvincesAdminArgs> = (
    getProvincesAdminArgs
  ) => {
    navigate(url.generate(DASHBOARD_PROVINCE_ROUTE, {}, getProvincesAdminArgs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_PROVINCE_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
    });
  };

  const onEdit = (provinceId: string) => {
    navigate(url.generate(DASHBOARD_PROVINCE_DETAILS, { provinceId }));
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
