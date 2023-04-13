import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetMessagesAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_MESSAGE_DETAILS,
  DASHBOARD_MESSAGE_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetMessagesAdminArgsGql,
  GetMessagesAdminQuery,
  GetMessagesAdminQueryVariables,
  PaginationArgsGql,
  UpdateMessageActivationAdminMutation,
  UpdateMessageActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_MESSAGES_ADMIN,
  MUTATION_UPDATE_MESSAGE_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetMessagesAdminQuery["getMessagesAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      userId: searchParams.get("userId") || undefined,
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
      isSubmitted: searchParams.has("isSubmitted")
        ? searchParams.get("isSubmitted") === "true"
        : false,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<GetMessagesAdminQuery["getMessagesAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetMessagesAdminArgsGql>({
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
  } = useForm<GetMessagesAdminArgs>({
    resolver: classValidatorResolver(GetMessagesAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      userId: queryArgs.userId || undefined,
      isActive: !!queryArgs.isActive,
      isSubmitted: !!queryArgs.isSubmitted,
    },
  });

  const { loading } = useQuery<
    GetMessagesAdminQuery,
    GetMessagesAdminQueryVariables
  >(QUERY_GET_MESSAGES_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getMessagesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getMessagesAdmin }) => {
      setRows(getMessagesAdmin?.edges);
      setPageInfo(getMessagesAdmin?.pageInfo);
    },
  });

  const [
    updateMessageActivationAdmin,
    { loading: updateMessageActivaitonLoading },
  ] = useMutation<
    UpdateMessageActivationAdminMutation,
    UpdateMessageActivationAdminMutationVariables
  >(MUTATION_UPDATE_MESSAGE_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_MESSAGE__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_MESSAGE__MESSAGE },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetMessagesAdminArgs> = (
    getMessagesAdminArgs
  ) => {
    navigate(url.generate(DASHBOARD_MESSAGE_ROUTE, {}, getMessagesAdminArgs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_MESSAGE_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      userId: "",
      isActive: true,
      isSubmitted: false,
    });
    navigate(url.generate(DASHBOARD_MESSAGE_ROUTE, {}, {}));
  };

  const onEdit = (messageId: string) => {
    navigate(url.generate(DASHBOARD_MESSAGE_DETAILS, { messageId }));
  };

  const onUpdateMessageActivation = () => {
    if (activationItem)
      updateMessageActivationAdmin({
        variables: {
          updateMessageActivationAdminInputs: {
            isActive: !activationItem?.isActive,
            messageId: activationItem?.id,
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
    setActivationItem,
    updateMessageActivaitonLoading,
    onUpdateMessageActivation,
  };
};

export default useData;
