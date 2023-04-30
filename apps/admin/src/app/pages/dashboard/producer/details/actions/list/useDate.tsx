import { useDashboardLayout, useProducerDetails } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProducerActionsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PRODUCER_DETAILS,
  DASHBOARD_PRODUCER_ACTION_DETAILS,
  DASHBOARD_PRODUCER_ACTION_NEW_PRODUCER_ACTION_ROUTE,
  DASHBOARD_PRODUCER_ACTION_ROUTE,
  DASHBOARD_PRODUCER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";

import {
  GetProducerActionsAdminArgsGql,
  GetProducerActionsAdminQuery,
  GetProducerActionsAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";

import { QUERY_GET_PRODUCER_ACTIONS_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { producerId, producer } = useProducerDetails();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProducerActionsAdminQuery["getProducerActionsAdmin"]["edges"]
  >([]);

  console.log({ producerId });

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      producerId,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetProducerActionsAdminQuery["getProducerActionsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProducerActionsAdminArgsGql>({
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
  } = useForm<GetProducerActionsAdminArgs>({
    resolver: classValidatorResolver(GetProducerActionsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      producerId,
    },
  });

  const { loading } = useQuery<
    GetProducerActionsAdminQuery,
    GetProducerActionsAdminQueryVariables
  >(QUERY_GET_PRODUCER_ACTIONS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getProducerActionsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProducerActionsAdmin }) => {
      setRows(getProducerActionsAdmin?.edges);
      setPageInfo(getProducerActionsAdmin?.pageInfo);
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
      pageName: TEXTS.PAGE_PRODUCER_ACTION__PAGE_TITLE,
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
          { label: TEXTS.PAGE_PRODUCER_ACTION__PRODUCER_ACTION },
        ],
      },
    });
  }, [setConfig, producer, producerId]);

  const onSubmitFilter: SubmitHandler<GetProducerActionsAdminArgs> = (
    getProducerActionsAdminArgs
  ) => {
    const { search } = getProducerActionsAdminArgs;

    navigate(
      url.generate(DASHBOARD_PRODUCER_ACTION_ROUTE, { producerId }, { search })
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_PRODUCER_ACTION_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
    });

    navigate(url.generate(DASHBOARD_PRODUCER_ACTION_ROUTE, { producerId }, {}));
  };

  const onEdit = (producerActionId: string) => {
    navigate(
      url.generate(DASHBOARD_PRODUCER_ACTION_DETAILS, {
        producerId,
        producerActionId,
      })
    );
  };

  const onNew = () => {
    navigate(
      url.generate(DASHBOARD_PRODUCER_ACTION_NEW_PRODUCER_ACTION_ROUTE, {
        producerId,
      })
    );
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
    onNew,
  };
};

export default useData;
