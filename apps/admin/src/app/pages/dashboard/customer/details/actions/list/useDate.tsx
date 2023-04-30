import { useDashboardLayout, useCustomerDetails } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetCustomerActionsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_CUSTOMER_DETAILS,
  DASHBOARD_CUSTOMER_ACTION_DETAILS,
  DASHBOARD_CUSTOMER_ACTION_NEW_CUSTOMER_ACTION_ROUTE,
  DASHBOARD_CUSTOMER_ACTION_ROUTE,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";

import {
  GetCustomerActionsAdminArgsGql,
  GetCustomerActionsAdminQuery,
  GetCustomerActionsAdminQueryVariables,
  PaginationArgsGql,
} from "@admin/gql/graphql";

import { QUERY_GET_CUSTOMER_ACTIONS_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { customerId, customer } = useCustomerDetails();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetCustomerActionsAdminQuery["getCustomerActionsAdmin"]["edges"]
  >([]);

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      search: searchParams.get("search") || "",
      customerId,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetCustomerActionsAdminQuery["getCustomerActionsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetCustomerActionsAdminArgsGql>({
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
  } = useForm<GetCustomerActionsAdminArgs>({
    resolver: classValidatorResolver(GetCustomerActionsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      customerId,
    },
  });

  const { loading } = useQuery<
    GetCustomerActionsAdminQuery,
    GetCustomerActionsAdminQueryVariables
  >(QUERY_GET_CUSTOMER_ACTIONS_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getCustomerActionsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getCustomerActionsAdmin }) => {
      setRows(getCustomerActionsAdmin?.edges);
      setPageInfo(getCustomerActionsAdmin?.pageInfo);
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
      pageName: TEXTS.PAGE_CUSTOMER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CUSTOMER__CUSTOMER,
            href: DASHBOARD_CUSTOMER_ROUTE,
          },
          {
            label: customer
              ? customer?.firstName + customer?.lastName
              : TEXTS.PAGE_CUSTOMER_UPDATE__UPDATE_CUSTOMER,
            href: customer
              ? url.generate(DASHBOARD_CUSTOMER_DETAILS, {
                  customerId: customer?.id,
                })
              : DASHBOARD_CUSTOMER_ROUTE,
          },
          { label: TEXTS.PAGE_CUSTOMER_ACTION__CUSTOMER_ACTION },
        ],
      },
    });
  }, [setConfig, customer, customerId]);

  const onSubmitFilter: SubmitHandler<GetCustomerActionsAdminArgs> = (
    getCustomerActionsAdminArgs
  ) => {
    const { search } = getCustomerActionsAdminArgs;

    navigate(
      url.generate(DASHBOARD_CUSTOMER_ACTION_ROUTE, { customerId }, { search })
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_CUSTOMER_ACTION_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
    });

    navigate(url.generate(DASHBOARD_CUSTOMER_ACTION_ROUTE, { customerId }, {}));
  };

  const onEdit = (customerActionId: string) => {
    navigate(
      url.generate(DASHBOARD_CUSTOMER_ACTION_DETAILS, {
        customerId,
        customerActionId,
      })
    );
  };

  const onNew = () => {
    navigate(
      url.generate(DASHBOARD_CUSTOMER_ACTION_NEW_CUSTOMER_ACTION_ROUTE, {
        customerId,
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
