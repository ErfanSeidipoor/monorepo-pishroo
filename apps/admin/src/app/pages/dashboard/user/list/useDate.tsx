import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetUsersAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_USER_DETAILS,
  DASHBOARD_USER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  UserRoleEnum,
  GetUsersAdminArgsGql,
  GetUsersAdminQuery,
  GetUsersAdminQueryVariables,
  PaginationArgsGql,
  UpdateUserActivationAdminMutation,
  UpdateUserActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_USERS_ADMIN,
  MUTATION_UPDATE_USER_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetUsersAdminQuery["getUsersAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => ({
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    phone: searchParams.get("phone") || "",
    isActive: searchParams.has("isActive")
      ? searchParams.get("isActive") === "true"
      : true,
    roles: (searchParams.getAll("roles") || []) as UserRoleEnum[],
  });

  const [pageInfo, setPageInfo] =
    useState<GetUsersAdminQuery["getUsersAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetUsersAdminArgsGql>({
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
  } = useForm<GetUsersAdminArgs>({
    resolver: classValidatorResolver(GetUsersAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
      email: queryArgs.email || "",
      phone: queryArgs.phone || "",
      roles: (queryArgs.roles || []) as [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<GetUsersAdminQuery, GetUsersAdminQueryVariables>(
    QUERY_GET_USERS_ADMIN,
    {
      variables: {
        getUsersAdminArgs: queryArgs,
        paginationArgs: paginationArgs,
      },
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: ({ getUsersAdmin }) => {
        setRows(getUsersAdmin?.edges);
        setPageInfo(getUsersAdmin?.pageInfo);
      },
    }
  );

  const [updateUserActivationAdmin, { loading: updateUserActivaitonLoading }] =
    useMutation<
      UpdateUserActivationAdminMutation,
      UpdateUserActivationAdminMutationVariables
    >(MUTATION_UPDATE_USER_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_USER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_USER__USER },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetUsersAdminArgs> = (
    loginAdminInputs
  ) => {
    navigate(url.generate(DASHBOARD_USER_ROUTE, {}, loginAdminInputs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_USER_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
      email: "",
      phone: "",
      roles: [],
      isActive: true,
    });
  };

  const onEdit = (userId: string) => {
    navigate(url.generate(DASHBOARD_USER_DETAILS, { userId }));
  };

  const onUpdateUserActivation = () => {
    if (activationItem)
      updateUserActivationAdmin({
        variables: {
          updateUserActivationAdmin: {
            isActive: !activationItem?.isActive,
            userId: activationItem?.id,
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
    updateUserActivaitonLoading,
    onUpdateUserActivation,
  };
};

export default useData;
