import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_USER_DETAILS,
  DASHBOARD_USER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateUserAdminInputsGql,
  CreateUserAdminMutation,
  CreateUserAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateUserAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_USER_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateUserAdminInputs>({
    resolver: classValidatorResolver(CreateUserAdminInputs),
    mode: "onChange",
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      isActive: false,
      roles: [],
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_USER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_USER__USER,
            href: DASHBOARD_USER_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_USER__NEW_USER },
        ],
      },
    });
  }, [setConfig]);

  const [createUserAdmin, { loading }] = useMutation<
    CreateUserAdminMutation,
    CreateUserAdminMutationVariables
  >(MUTATION_CREATE_USER_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createUserAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_USER__SUCCESS, { variant: "success" });
      navigate(url.generate(DASHBOARD_USER_DETAILS, { userId: id }));
    },
  });

  const onSubmit: SubmitHandler<CreateUserAdminInputs> = (
    createUserAdminInputs
  ) => {
    createUserAdmin({
      variables: {
        createUserAdminInputs:
          createUserAdminInputs as unknown as CreateUserAdminInputsGql,
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
