import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProducersAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PRODUCER_ACTION_ROUTE,
  DASHBOARD_PRODUCER_DETAILS,
  DASHBOARD_PRODUCER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProducersAdminArgsGql,
  GetProducersAdminQuery,
  GetProducersAdminQueryVariables,
  PaginationArgsGql,
  UpdateProducerActivationAdminMutation,
  UpdateProducerActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PRODUCERS_ADMIN,
  MUTATION_UPDATE_PRODUCER_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProducersAdminQuery["getProducersAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<(typeof rows)[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      provinceIds: searchParams.get("provinceIds")
        ? [searchParams.get("provinceIds") || ""]
        : undefined,
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<GetProducersAdminQuery["getProducersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetProducersAdminArgsGql>({
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
  } = useForm<GetProducersAdminArgs>({
    resolver: classValidatorResolver(GetProducersAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetProducersAdminQuery,
    GetProducersAdminQueryVariables
  >(QUERY_GET_PRODUCERS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProducersAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProducersAdmin }) => {
      setRows(getProducersAdmin?.edges);
      setPageInfo(getProducersAdmin?.pageInfo);
    },
  });

  const [
    updateProducerActivationAdmin,
    { loading: updateProducerActivaitonLoading },
  ] = useMutation<
    UpdateProducerActivationAdminMutation,
    UpdateProducerActivationAdminMutationVariables
  >(MUTATION_UPDATE_PRODUCER_ACTIVATION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (res) => {
      setActivationItem(undefined);
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
      pageName: TEXTS.PAGE_PRODUCER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PRODUCER__PRODUCER },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetProducersAdminArgs> = (
    getProducersAdminArgs
  ) => {
    navigate(url.generate(DASHBOARD_PRODUCER_ROUTE, {}, getProducersAdminArgs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_PRODUCER_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      provinceIds: [],
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_PRODUCER_ROUTE, {}, {}));
  };

  const onEdit = (producerId: string) => {
    navigate(url.generate(DASHBOARD_PRODUCER_DETAILS, { producerId }));
  };

  const onUpdateProducerActivation = () => {
    if (activationItem)
      updateProducerActivationAdmin({
        variables: {
          updateProducerActivationAdmin: {
            isActive: !activationItem?.isActive,
            producerId: activationItem?.id,
          },
        },
      });
  };

  const onActions = (producerId: string) => {
    navigate(url.generate(DASHBOARD_PRODUCER_ACTION_ROUTE, { producerId }));
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
    updateProducerActivaitonLoading,
    onUpdateProducerActivation,
    onActions,
  };
};

export default useData;
