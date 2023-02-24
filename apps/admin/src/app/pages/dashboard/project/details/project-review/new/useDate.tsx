import { useDashboardLayout, useProjectDetails } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PROJECT_DETAILS,
  DASHBOARD_PROJECT_REVIEW_DETAILS,
  DASHBOARD_PROJECT_REVIEW_ROUTE,
  DASHBOARD_PROJECT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProjectReviewAdminMutation,
  CreateProjectReviewAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProjectReviewAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PROJECT_REVIEW_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { projectId, project } = useProjectDetails();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProjectReviewAdminInputs>({
    resolver: classValidatorResolver(CreateProjectReviewAdminInputs),
    mode: "onChange",
    defaultValues: {
      fileId: "",
      text: "",
      isActive: true,
      reviewer: "",
      projectId,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROJECT_REVIEW__PAGE_TITLE,
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
          {
            label: TEXTS.PAGE_PROJECT_REVIEW__PROJECT_REVIEW,
            href: url.generate(DASHBOARD_PROJECT_REVIEW_ROUTE, { projectId }),
          },
          { label: TEXTS.PAGE_NEW_PROJECT_REVIEW__NEW_PROJECT_REVIEW },
        ],
      },
    });
  }, [setConfig, project, projectId]);

  const [createProjectReviewAdmin, { loading }] = useMutation<
    CreateProjectReviewAdminMutation,
    CreateProjectReviewAdminMutationVariables
  >(MUTATION_CREATE_PROJECT_REVIEW_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProjectReviewAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PROJECT_REVIEW__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_PROJECT_REVIEW_DETAILS, {
          projectId,
          projectReviewId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateProjectReviewAdminInputs> = (
    createProjectReviewAdminInputs
  ) => {
    createProjectReviewAdmin({
      variables: {
        createProjectReviewAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading,
  };
};

export default useData;
