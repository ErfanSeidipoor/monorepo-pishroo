import { useDashboardLayout, useTransporterDetails } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetTransporterActionsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_TRANSPORTER_DETAILS,
  DASHBOARD_TRANSPORTER_ACTION_DETAILS,
  DASHBOARD_TRANSPORTER_ACTION_NEW_TRANSPORTER_ACTION_ROUTE,
  DASHBOARD_TRANSPORTER_ACTION_ROUTE,
  DASHBOARD_TRANSPORTER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";

import {
  GetTransporterActionsAdminArgsGql,
  GetTransporterActionsAdminQuery,
  GetTransporterActionsAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";

import { QUERY_GET_TRANSPORTER_ACTIONS_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { transporterId, transporter } = useTransporterDetails();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetTransporterActionsAdminQuery["getTransporterActionsAdmin"]["edges"]
  >([]);

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      transporterId,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetTransporterActionsAdminQuery["getTransporterActionsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetTransporterActionsAdminArgsGql>(
    {
      ...convertSearchParamsToArgs(searchParams),
    }
  );

  const [paginationArgs, setPaginationArgs] = useState<PaginationArgsGql>({
    page: Number(searchParams.get("page")) || 1,
  });

  const {
    handleSubmit: handleSubmitFilter,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<GetTransporterActionsAdminArgs>({
    resolver: classValidatorResolver(GetTransporterActionsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      transporterId,
    },
  });

  const { loading } = useQuery<
    GetTransporterActionsAdminQuery,
    GetTransporterActionsAdminQueryVariables
  >(QUERY_GET_TRANSPORTER_ACTIONS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getTransporterActionsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getTransporterActionsAdmin }) => {
      setRows(getTransporterActionsAdmin?.edges);
      setPageInfo(getTransporterActionsAdmin?.pageInfo);
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
      pageName: TEXTS.PAGE_TRANSPORTER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER,
            href: DASHBOARD_TRANSPORTER_ROUTE,
          },
          {
            label: transporter
              ? transporter?.name
              : TEXTS.PAGE_TRANSPORTER_UPDATE__UPDATE_TRANSPORTER,
            href: transporter
              ? url.generate(DASHBOARD_TRANSPORTER_DETAILS, {
                  transporterId: transporter?.id,
                })
              : DASHBOARD_TRANSPORTER_ROUTE,
          },
          { label: TEXTS.PAGE_TRANSPORTER_ACTION__TRANSPORTER_ACTION },
        ],
      },
    });
  }, [setConfig, transporter, transporterId]);

  const onSubmitFilter: SubmitHandler<GetTransporterActionsAdminArgs> = (
    getTransporterActionsAdminArgs
  ) => {
    const { search } = getTransporterActionsAdminArgs;

    navigate(
      url.generate(
        DASHBOARD_TRANSPORTER_ACTION_ROUTE,
        { transporterId },
        { search }
      )
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_TRANSPORTER_ACTION_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
    });

    navigate(
      url.generate(DASHBOARD_TRANSPORTER_ACTION_ROUTE, { transporterId }, {})
    );
  };

  const onEdit = (transporterActionId: string) => {
    navigate(
      url.generate(DASHBOARD_TRANSPORTER_ACTION_DETAILS, {
        transporterId,
        transporterActionId,
      })
    );
  };

  const onNew = () => {
    navigate(
      url.generate(DASHBOARD_TRANSPORTER_ACTION_NEW_TRANSPORTER_ACTION_ROUTE, {
        transporterId,
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
