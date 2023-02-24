import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetTransporterAgentsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_TRANSPORTER_AGENT_DETAILS,
  DASHBOARD_TRANSPORTER_AGENT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetTransporterAgentsAdminArgsGql,
  GetTransporterAgentsAdminQuery,
  GetTransporterAgentsAdminQueryVariables,
  PaginationArgsGql,
  UpdateTransporterAgentActivationAdminMutation,
  UpdateTransporterAgentActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_TRANSPORTER_AGENTS_ADMIN,
  MUTATION_UPDATE_TRANSPORTER_AGENT_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetTransporterAgentsAdminQuery["getTransporterAgentsAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      transporterId: searchParams.get("transporterId") || undefined,
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetTransporterAgentsAdminQuery["getTransporterAgentsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetTransporterAgentsAdminArgsGql>({
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
  } = useForm<GetTransporterAgentsAdminArgs>({
    resolver: classValidatorResolver(GetTransporterAgentsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      transporterId: queryArgs.transporterId || undefined,
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetTransporterAgentsAdminQuery,
    GetTransporterAgentsAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_AGENTS_ADMIN, {
    variables: {
      getTransporterAgentsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getTransporterAgentsAdmin }) => {
      setRows(getTransporterAgentsAdmin?.edges);
      setPageInfo(getTransporterAgentsAdmin?.pageInfo);
    },
  });

  const [
    updateTransporterAgentActivationAdmin,
    { loading: updateTransporterAgentActivaitonLoading },
  ] = useMutation<
    UpdateTransporterAgentActivationAdminMutation,
    UpdateTransporterAgentActivationAdminMutationVariables
  >(MUTATION_UPDATE_TRANSPORTER_AGENT_ACTIVATION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (res) => {
      console.log(res);

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
      pageName: TEXTS.PAGE_TRANSPORTER_AGENT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_TRANSPORTER_AGENT__TRANSPORTER_AGENT },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetTransporterAgentsAdminArgs> = (
    getTransporterAgentsAdminArgs
  ) => {
    navigate(
      url.generate(
        DASHBOARD_TRANSPORTER_AGENT_ROUTE,
        {},
        getTransporterAgentsAdminArgs
      )
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_TRANSPORTER_AGENT_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      transporterId: undefined,
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_TRANSPORTER_AGENT_ROUTE, {}, {}));
  };

  const onEdit = (transporterAgentId: string) => {
    navigate(
      url.generate(DASHBOARD_TRANSPORTER_AGENT_DETAILS, { transporterAgentId })
    );
  };

  const onUpdateTransporterAgentActivation = () => {
    if (activationItem)
      updateTransporterAgentActivationAdmin({
        variables: {
          updateTransporterAgentActivationAdmin: {
            isActive: !activationItem?.isActive,
            transporterAgentId: activationItem?.id,
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
    updateTransporterAgentActivaitonLoading,
    onUpdateTransporterAgentActivation,
  };
};

export default useData;
