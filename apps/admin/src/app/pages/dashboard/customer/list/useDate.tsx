import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetCustomersAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_CUSTOMER_DETAILS,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCustomersAdminArgsGql,
  GetCustomersAdminQuery,
  GetCustomersAdminQueryVariables,
  PaginationArgsGql,
  UpdateCustomerActivationAdminMutation,
  UpdateCustomerActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_CUSTOMERS_ADMIN,
  MUTATION_UPDATE_CUSTOMER_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetCustomersAdminQuery["getCustomersAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

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
    useState<GetCustomersAdminQuery["getCustomersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetCustomersAdminArgsGql>({
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
  } = useForm<GetCustomersAdminArgs>({
    resolver: classValidatorResolver(GetCustomersAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetCustomersAdminQuery,
    GetCustomersAdminQueryVariables
  >(QUERY_GET_CUSTOMERS_ADMIN, {
    variables: {
      getCustomersAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getCustomersAdmin }) => {
      setRows(getCustomersAdmin?.edges);
      setPageInfo(getCustomersAdmin?.pageInfo);
    },
  });

  const [
    updateCustomerActivationAdmin,
    { loading: updateCustomerActivaitonLoading },
  ] = useMutation<
    UpdateCustomerActivationAdminMutation,
    UpdateCustomerActivationAdminMutationVariables
  >(MUTATION_UPDATE_CUSTOMER_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_CUSTOMER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_CUSTOMER__CUSTOMER },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetCustomersAdminArgs> = (
    loginAdminInputs
  ) => {
    navigate(url.generate(DASHBOARD_CUSTOMER_ROUTE, {}, loginAdminInputs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_CUSTOMER_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      provinceIds: [],
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_CUSTOMER_ROUTE, {}, {}));
  };

  const onEdit = (customerId: string) => {
    navigate(url.generate(DASHBOARD_CUSTOMER_DETAILS, { customerId }));
  };

  const onUpdateCustomerActivation = () => {
    if (activationItem)
      updateCustomerActivationAdmin({
        variables: {
          updateCustomerActivationAdmin: {
            isActive: !activationItem?.isActive,
            customerId: activationItem?.id,
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
    updateCustomerActivaitonLoading,
    onUpdateCustomerActivation,
  };
};

export default useData;
