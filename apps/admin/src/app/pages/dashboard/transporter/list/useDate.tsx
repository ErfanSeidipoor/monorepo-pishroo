import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetTransportersAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_TRANSPORTER_DETAILS,
  DASHBOARD_TRANSPORTER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetTransportersAdminArgsGql,
  GetTransportersAdminQuery,
  GetTransportersAdminQueryVariables,
  PaginationArgsGql,
  UpdateTransporterActivationAdminMutation,
  UpdateTransporterActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_TRANSPORTERS_ADMIN,
  MUTATION_UPDATE_TRANSPORTER_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetTransportersAdminQuery["getTransportersAdmin"]["edges"]
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
    useState<GetTransportersAdminQuery["getTransportersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetTransportersAdminArgsGql>({
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
  } = useForm<GetTransportersAdminArgs>({
    resolver: classValidatorResolver(GetTransportersAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetTransportersAdminQuery,
    GetTransportersAdminQueryVariables
  >(QUERY_GET_TRANSPORTERS_ADMIN, {
    variables: {
      getTransportersAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getTransportersAdmin }) => {
      setRows(getTransportersAdmin?.edges);
      setPageInfo(getTransportersAdmin?.pageInfo);
    },
  });

  const [
    updateTransporterActivationAdmin,
    { loading: updateTransporterActivaitonLoading },
  ] = useMutation<
    UpdateTransporterActivationAdminMutation,
    UpdateTransporterActivationAdminMutationVariables
  >(MUTATION_UPDATE_TRANSPORTER_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_TRANSPORTER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetTransportersAdminArgs> = (
    getTransportersAdminArgs
  ) => {
    navigate(
      url.generate(DASHBOARD_TRANSPORTER_ROUTE, {}, getTransportersAdminArgs)
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_TRANSPORTER_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      provinceIds: [],
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_TRANSPORTER_ROUTE, {}, {}));
  };

  const onEdit = (transporterId: string) => {
    navigate(url.generate(DASHBOARD_TRANSPORTER_DETAILS, { transporterId }));
  };

  const onUpdateTransporterActivation = () => {
    if (activationItem)
      updateTransporterActivationAdmin({
        variables: {
          updateTransporterActivationAdmin: {
            isActive: !activationItem?.isActive,
            transporterId: activationItem?.id,
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
    updateTransporterActivaitonLoading,
    onUpdateTransporterActivation,
  };
};

export default useData;
