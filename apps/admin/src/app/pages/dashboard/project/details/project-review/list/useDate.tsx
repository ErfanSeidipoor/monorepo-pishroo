import { useDashboardLayout, useProjectDetails } from "@admin/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";

import TEXTS from "@pishroo/texts";
import { GetProjectReviewsAdminArgs } from "@pishroo/dto";
import { url } from "@pishroo/utils";

import {
  DASHBOARD_PROJECT_DETAILS,
  DASHBOARD_PROJECT_REVIEW_DETAILS,
  DASHBOARD_PROJECT_REVIEW_NEW_PROJECT_REVIEW_ROUTE,
  DASHBOARD_PROJECT_REVIEW_ROUTE,
  DASHBOARD_PROJECT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  GetProjectReviewsAdminArgsGql,
  GetProjectReviewsAdminQuery,
  GetProjectReviewsAdminQueryVariables,
  PaginationArgsGql,
  DeleteProjectReviewAdminMutation,
  DeleteProjectReviewAdminMutationVariables,
} from "@admin/gql/graphql";

import {
  QUERY_GET_PROJECT_REVIEWS_ADMIN,
  MUTATION_DELETE_PROJECT_REVIEW_ADMIN,
} from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { projectId, project } = useProjectDetails();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rows, setRows] = useState<
    GetProjectReviewsAdminQuery["getProjectReviewsAdmin"]["edges"]
  >([]);

  const [deleteItem, setDeleteItem] = useState<typeof rows[0]>();

  const convertSearchParamsToArgs = (searchParams: URLSearchParams) => {
    return {
      reviewer: searchParams.get("reviewer") || "",
      text: searchParams.get("text") || "",
      projectId,
    };
  };

  const [pageInfo, setPageInfo] =
    useState<
      GetProjectReviewsAdminQuery["getProjectReviewsAdmin"]["pageInfo"]
    >();

  const [queryArgs, setQueryArgs] = useState<GetProjectReviewsAdminArgsGql>({
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
  } = useForm<GetProjectReviewsAdminArgs>({
    resolver: classValidatorResolver(GetProjectReviewsAdminArgs),
    mode: "onChange",
    defaultValues: {
      reviewer: queryArgs.reviewer || "",
      text: queryArgs.text || "",
      projectId,
    },
  });

  const { loading } = useQuery<
    GetProjectReviewsAdminQuery,
    GetProjectReviewsAdminQueryVariables
  >(QUERY_GET_PROJECT_REVIEWS_ADMIN, {
    variables: {
      getProjectReviewsAdminArgs: queryArgs,
      paginationArgs: paginationArgs,
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: ({ getProjectReviewsAdmin }) => {
      setRows(getProjectReviewsAdmin?.edges);
      setPageInfo(getProjectReviewsAdmin?.pageInfo);
    },
  });

  const [deleteProjectReviewAdmin, { loading: deleteProjectReviewLoading }] =
    useMutation<
      DeleteProjectReviewAdminMutation,
      DeleteProjectReviewAdminMutationVariables
    >(MUTATION_DELETE_PROJECT_REVIEW_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: (res) => {
        setDeleteItem(undefined);
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
      pageName: TEXTS.PAGE_PROJECT_REVIEW__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROJECT__PROJECT,
            href: DASHBOARD_PROJECT_ROUTE,
          },
          {
            label: project
              ? project?.name
              : TEXTS.PAGE_PROJECT_UPDATE__UPDATE_PROJECT,
            href: project
              ? url.generate(DASHBOARD_PROJECT_DETAILS, {
                  projectId: project?.id,
                })
              : DASHBOARD_PROJECT_ROUTE,
          },
          { label: TEXTS.PAGE_PROJECT_REVIEW__PROJECT_REVIEW },
        ],
      },
    });
  }, [setConfig, project, projectId]);

  const onSubmitFilter: SubmitHandler<GetProjectReviewsAdminArgs> = (
    getProjectReviewsAdminArgs
  ) => {
    const { reviewer, text } = getProjectReviewsAdminArgs;

    navigate(
      url.generate(
        DASHBOARD_PROJECT_REVIEW_ROUTE,
        { projectId },
        { reviewer, text }
      )
    );
  };

  const onPageSelect = (page: number) => {
    navigate(
      url.generate(
        DASHBOARD_PROJECT_REVIEW_ROUTE,
        {},
        { ...paginationArgs, page }
      )
    );
  };

  const onClearFilter = () => {
    reset({
      text: "",
      reviewer: "",
    });
    navigate(url.generate(DASHBOARD_PROJECT_REVIEW_ROUTE, { projectId }, {}));
  };

  const onEdit = (projectReviewId: string) => {
    navigate(
      url.generate(DASHBOARD_PROJECT_REVIEW_DETAILS, {
        projectId,
        projectReviewId,
      })
    );
  };

  const onNew = () => {
    navigate(
      url.generate(DASHBOARD_PROJECT_REVIEW_NEW_PROJECT_REVIEW_ROUTE, {
        projectId,
      })
    );
  };

  const onDeleteProjectReview = () => {
    if (deleteItem)
      deleteProjectReviewAdmin({
        variables: {
          deleteProjectReviewAdmin: {
            projectReviewId: deleteItem?.id,
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
    onNew,
    deleteItem,
    setDeleteItem,
    deleteProjectReviewLoading,
    onDeleteProjectReview,
  };
};

export default useData;
