import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProjectReviewAdminMutation,
  UpdateProjectReviewAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProjectDetails, useProjectReviewDetails } from "@admin/hooks";

import { UpdateProjectReviewAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PROJECT_REVIEW_ADMIN } from "./gql";

const useData = () => {
  const { getProjectReviewLoading, projectReviewId, projectReview } =
    useProjectReviewDetails();

  const { projectId } = useProjectDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProjectReviewAdminInputs>({
    resolver: classValidatorResolver(UpdateProjectReviewAdminInputs),
    mode: "onChange",
    defaultValues: {
      projectReviewId,
      reviewer: "",
      text: "",
      isActive: true,
      projectId,
    },
  });

  useEffect(() => {
    if (projectReview) {
      const { reviewer, text, isActive, fileUses } = projectReview;
      const [fileUse] = fileUses;
      const {
        file: { id: fileId },
      } = fileUse;

      setValue("reviewer", reviewer || "");
      setValue("text", text || "");
      setValue("isActive", !!isActive);
      setValue("fileId", fileId);
      setValue("projectId", projectId);
    }
  }, [projectId, projectReview, setValue]);

  const [updateProjectReviewAdmin, { loading: updateProjectReviewLoading }] =
    useMutation<
      UpdateProjectReviewAdminMutation,
      UpdateProjectReviewAdminMutationVariables
    >(MUTATION_UPDATE_PROJECT_REVIEW_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PROJECT_REVIEW_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<UpdateProjectReviewAdminInputs> = (
    updateProjectReviewAdminInputs
  ) => {
    updateProjectReviewAdmin({
      variables: {
        updateProjectReviewAdminInputs,
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProjectReviewLoading || getProjectReviewLoading,
  };
};

export default useData;
