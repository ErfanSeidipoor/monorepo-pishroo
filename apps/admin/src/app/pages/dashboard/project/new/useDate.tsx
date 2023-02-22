import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PROJECT_DETAILS,
  DASHBOARD_PROJECT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProjectAdminMutation,
  CreateProjectAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProjectAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PROJECT_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProjectAdminInputs>({
    resolver: classValidatorResolver(CreateProjectAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      cityId: "",
      isActive: false,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PROJECT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PROJECT__PROJECT,
            href: DASHBOARD_PROJECT_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_PROJECT__NEW_PROJECT },
        ],
      },
    });
  }, [setConfig]);

  const [createProjectAdmin, { loading }] = useMutation<
    CreateProjectAdminMutation,
    CreateProjectAdminMutationVariables
  >(MUTATION_CREATE_PROJECT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProjectAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PROJECT__SUCCESS, { variant: "success" });
      navigate(url.generate(DASHBOARD_PROJECT_DETAILS, { projectId: id }));
    },
  });

  const onSubmit: SubmitHandler<CreateProjectAdminInputs> = (
    createProjectAdminInputs
  ) => {
    const lat = createProjectAdminInputs.lat;
    const long = createProjectAdminInputs.long;

    createProjectAdmin({
      variables: {
        createProjectAdminInputs: {
          ...createProjectAdminInputs,
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
    loading,
  };
};

export default useData;
