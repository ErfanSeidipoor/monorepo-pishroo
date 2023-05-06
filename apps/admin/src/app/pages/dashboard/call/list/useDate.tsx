import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetCallsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_CALL_DETAILS,
  DASHBOARD_CALL_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCallsAdminArgsGql,
  GetCallsAdminQuery,
  GetCallsAdminQueryVariables,
  PaginationArgsGql,
  DeleteCallAdminMutation,
  DeleteCallAdminMutationVariables,
} from "@admin/gql/graphql";

import { QUERY_GET_CALLS_ADMIN, MUTATION_DELETE_CALL_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetCallsAdminQuery["getCallsAdmin"]["edges"]
  >([]);

  const [activationItem, setDeleteItem] = useState<(typeof rows)[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      userId: searchParams.get("userId") || undefined,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<GetCallsAdminQuery["getCallsAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetCallsAdminArgsGql>({
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
  } = useForm<GetCallsAdminArgs>({
    resolver: classValidatorResolver(GetCallsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      userId: queryArgs.userId || undefined,
    },
  });

  const { loading } = useQuery<GetCallsAdminQuery, GetCallsAdminQueryVariables>(
    QUERY_GET_CALLS_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        getCallsAdminArgs: queryArgs,
        paginationArgs: paginationArgs,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: ({ getCallsAdmin }) => {
        setRows(getCallsAdmin?.edges);
        setPageInfo(getCallsAdmin?.pageInfo);
      },
    }
  );

  const [deleteCallAdmin, { loading: updateCallActivaitonLoading }] =
    useMutation<DeleteCallAdminMutation, DeleteCallAdminMutationVariables>(
      MUTATION_DELETE_CALL_ADMIN,
      {
        onError: (error) => {
          enqueueSnackbar(error.message, { variant: "error" });
        },
        onCompleted: (res) => {
          setDeleteItem(undefined);
        },
      }
    );

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
      pageName: TEXTS.PAGE_CALL__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_CALL__CALL },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetCallsAdminArgs> = (
    getCallsAdminArgs
  ) => {
    navigate(url.generate(DASHBOARD_CALL_ROUTE, {}, getCallsAdminArgs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_CALL_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      userId: "",
    });
    navigate(url.generate(DASHBOARD_CALL_ROUTE, {}, {}));
  };

  const onEdit = (callId: string) => {
    navigate(url.generate(DASHBOARD_CALL_DETAILS, { callId }));
  };

  const onDeleteCall = () => {
    if (activationItem)
      deleteCallAdmin({
        variables: {
          deleteCallAdminInputs: {
            callId: activationItem?.id,
          },
        },
      });
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
    setDeleteItem,
    updateCallActivaitonLoading,
    onDeleteCall,
  };
};

export default useData;
