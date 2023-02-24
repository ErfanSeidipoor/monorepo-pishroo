import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProjectAdminMutation,
  UpdateProjectAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProjectDetails } from "@admin/hooks";

import { UpdateProjectAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PROJECT_ADMIN } from "./gql";

const useData = () => {
  const { getProjectLoading, projectId, project } = useProjectDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProjectAdminInputs>({
    resolver: classValidatorResolver(UpdateProjectAdminInputs),
    mode: "onChange",
    defaultValues: {
      projectId,
      name: "",
      slug: "",
      description: "",
      cityId: "",
      long: undefined,
      lat: undefined,
      isActive: false,
    },
  });

  useEffect(() => {
    if (project) {
      const { name, slug, isActive, cityId, description, lat, long } = project;
      setValue("name", name);
      setValue("slug", slug);
      setValue("description", description || "");
      setValue("lat", lat || undefined);
      setValue("long", long || undefined);
      setValue("isActive", !!isActive);
      setValue("cityId", cityId || "");
    }
  }, [project, setValue]);

  const [updateProjectAdmin, { loading: updateProjectLoading }] = useMutation<
    UpdateProjectAdminMutation,
    UpdateProjectAdminMutationVariables
  >(MUTATION_UPDATE_PROJECT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: () => {
      enqueueSnackbar(TEXTS.PAGE_PROJECT_UPDATE__SUCCESS, {
        variant: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateProjectAdminInputs> = (
    updateProjectAdminInputs
  ) => {
    const lat = updateProjectAdminInputs.lat;
    const long = updateProjectAdminInputs.long;

    updateProjectAdmin({
      variables: {
        updateProjectAdminInputs: {
          ...updateProjectAdminInputs,
          lat: lat && Number(lat),
          long: long && Number(long),
        },
      },
    });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProjectLoading || getProjectLoading,
  };
};

export default useData;
