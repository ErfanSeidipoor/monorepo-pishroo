import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetCategoriesAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_CATEGORY_DETAILS,
  DASHBOARD_CATEGORY_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetCategoriesAdminArgsGql,
  GetCategoriesAdminQuery,
  GetCategoriesAdminQueryVariables,
  PaginationArgsGql,
  UpdateCategoryActivationAdminMutation,
  UpdateCategoryActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_CATEGORIES_ADMIN,
  MUTATION_UPDATE_CATEGORY_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetCategoriesAdminQuery["getCategoriesAdmin"]["edges"]
  >([]);

  const [activationItem, setActivationItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      name: searchParams.get("name") || "",
      isActive: searchParams.has("isActive")
        ? searchParams.get("isActive") === "true"
        : true,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<GetCategoriesAdminQuery["getCategoriesAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetCategoriesAdminArgsGql>({
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
  } = useForm<GetCategoriesAdminArgs>({
    resolver: classValidatorResolver(GetCategoriesAdminArgs),
    mode: "onChange",
    defaultValues: {
      name: queryArgs.name || "",
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetCategoriesAdminQuery,
    GetCategoriesAdminQueryVariables
  >(QUERY_GET_CATEGORIES_ADMIN, {
    fetchPolicy: "no-cache",
    variables: {
      getCategoriesAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getCategoriesAdmin }) => {
      setRows(getCategoriesAdmin?.edges);
      setPageInfo(getCategoriesAdmin?.pageInfo);
    },
  });

  const [
    updateCategoryActivationAdmin,
    { loading: updateCategoryActivaitonLoading },
  ] = useMutation<
    UpdateCategoryActivationAdminMutation,
    UpdateCategoryActivationAdminMutationVariables
  >(MUTATION_UPDATE_CATEGORY_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_CATEGORY__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_CATEGORY__CATEGORY },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetCategoriesAdminArgs> = (
    getCategoriesAdminArgs
  ) => {
    navigate(
      url.generate(DASHBOARD_CATEGORY_ROUTE, {}, getCategoriesAdminArgs)
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_CATEGORY_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      name: "",
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_CATEGORY_ROUTE, {}, {}));
  };

  const onEdit = (categoryId: string) => {
    navigate(url.generate(DASHBOARD_CATEGORY_DETAILS, { categoryId }));
  };

  const onUpdateCategoryActivation = () => {
    if (activationItem)
      updateCategoryActivationAdmin({
        variables: {
          updateCategoryActivationAdminInputs: {
            isActive: !activationItem?.isActive,
            categoryId: activationItem?.id,
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
    updateCategoryActivaitonLoading,
    onUpdateCategoryActivation,
  };
};

export default useData;
