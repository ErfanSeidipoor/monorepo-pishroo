import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProducerAgentsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PRODUCER_AGENT_DETAILS,
  DASHBOARD_PRODUCER_AGENT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProducerAgentsAdminArgsGql,
  GetProducerAgentsAdminQuery,
  GetProducerAgentsAdminQueryVariables,
  PaginationArgsGql,
  UpdateProducerAgentActivationAdminMutation,
  UpdateProducerAgentActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PRODUCER_AGENTS_ADMIN,
  MUTATION_UPDATE_PRODUCER_AGENT_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProducerAgentsAdminQuery["getProducerAgentsAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      producerId: searchParams.get("producerId") || undefined,
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetProducerAgentsAdminQuery["getProducerAgentsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProducerAgentsAdminArgsGql>({
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
  } = useForm<GetProducerAgentsAdminArgs>({
    resolver: classValidatorResolver(GetProducerAgentsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      producerId: queryArgs.producerId || undefined,
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetProducerAgentsAdminQuery,
    GetProducerAgentsAdminQueryVariables
  >(QUERY_GET_PRODUCER_AGENTS_ADMIN, {
    variables: {
      getProducerAgentsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProducerAgentsAdmin }) => {
      setRows(getProducerAgentsAdmin?.edges);
      setPageInfo(getProducerAgentsAdmin?.pageInfo);
    },
  });

  const [
    updateProducerAgentActivationAdmin,
    { loading: updateProducerAgentActivaitonLoading },
  ] = useMutation<
    UpdateProducerAgentActivationAdminMutation,
    UpdateProducerAgentActivationAdminMutationVariables
  >(MUTATION_UPDATE_PRODUCER_AGENT_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_PRODUCER_AGENT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PRODUCER_AGENT__PRODUCER_AGENT },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetProducerAgentsAdminArgs> = (
    getProducerAgentsAdminArgs
  ) => {
    navigate(
      url.generate(
        DASHBOARD_PRODUCER_AGENT_ROUTE,
        {},
        getProducerAgentsAdminArgs
      )
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_PRODUCER_AGENT_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      producerId: undefined,
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_PRODUCER_AGENT_ROUTE, {}, {}));
  };

  const onEdit = (producerAgentId: string) => {
    navigate(
      url.generate(DASHBOARD_PRODUCER_AGENT_DETAILS, { producerAgentId })
    );
  };

  const onUpdateProducerAgentActivation = () => {
    if (activationItem)
      updateProducerAgentActivationAdmin({
        variables: {
          updateProducerAgentActivationAdmin: {
            isActive: !activationItem?.isActive,
            producerAgentId: activationItem?.id,
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
    updateProducerAgentActivaitonLoading,
    onUpdateProducerAgentActivation,
  };
};

export default useData;
