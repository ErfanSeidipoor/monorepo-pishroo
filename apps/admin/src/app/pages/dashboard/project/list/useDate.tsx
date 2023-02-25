import { useDashboardLayout } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProjectsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PROJECT_DETAILS,
  DASHBOARD_PROJECT_REVIEW_ROUTE,
  DASHBOARD_PROJECT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProjectsAdminArgsGql,
  GetProjectsAdminQuery,
  GetProjectsAdminQueryVariables,
  PaginationArgsGql,
  UpdateProjectActivationAdminMutation,
  UpdateProjectActivationAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PROJECTS_ADMIN,
  MUTATION_UPDATE_PROJECT_ACTIVATION_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProjectsAdminQuery["getProjectsAdmin"]["edges"]
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
    useState<GetProjectsAdminQuery["getProjectsAdmin"]["pageInfo"]>();

  const [queryArgs, setQueryArgs] = useState<GetProjectsAdminArgsGql>({
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
  } = useForm<GetProjectsAdminArgs>({
    resolver: classValidatorResolver(GetProjectsAdminArgs),
    mode: "onChange",
    defaultValues: {
      search: queryArgs.search || "",
      provinceIds: queryArgs.provinceIds || [],
      isActive: !!queryArgs.isActive,
    },
  });

  const { loading } = useQuery<
    GetProjectsAdminQuery,
    GetProjectsAdminQueryVariables
  >(QUERY_GET_PROJECTS_ADMIN, {
    variables: {
      getProjectsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProjectsAdmin }) => {
      setRows(getProjectsAdmin?.edges);
      setPageInfo(getProjectsAdmin?.pageInfo);
    },
  });

  const [
    updateProjectActivationAdmin,
    { loading: updateProjectActivaitonLoading },
  ] = useMutation<
    UpdateProjectActivationAdminMutation,
    UpdateProjectActivationAdminMutationVariables
  >(MUTATION_UPDATE_PROJECT_ACTIVATION_ADMIN, {
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
      pageName: TEXTS.PAGE_PROJECT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          { label: TEXTS.PAGE_PROJECT__PROJECT },
        ],
      },
    });
  }, [setConfig]);

  const onSubmitFilter: SubmitHandler<GetProjectsAdminArgs> = (
    getProjectsAdminArgs
  ) => {
    navigate(url.generate(DASHBOARD_PROJECT_ROUTE, {}, getProjectsAdminArgs));
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(DASHBOARD_PROJECT_ROUTE, {}, { ...paginationArgs, page })
    );
  };

  const onClearFilter = () => {
    reset({
      search: "",
      provinceIds: [],
      isActive: true,
    });
    navigate(url.generate(DASHBOARD_PROJECT_ROUTE, {}, {}));
  };

  const onEdit = (projectId: string) => {
    navigate(url.generate(DASHBOARD_PROJECT_DETAILS, { projectId }));
  };

  const onReview = (projectId: string) => {
    navigate(url.generate(DASHBOARD_PROJECT_REVIEW_ROUTE, { projectId }));
  };

  const onUpdateProjectActivation = () => {
    if (activationItem)
      updateProjectActivationAdmin({
        variables: {
          updateProjectActivationAdmin: {
            isActive: !activationItem?.isActive,
            projectId: activationItem?.id,
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
    onReview,
    activationItem,
    setActivationItem,
    updateProjectActivaitonLoading,
    onUpdateProjectActivation,
  };
};

export default useData;
