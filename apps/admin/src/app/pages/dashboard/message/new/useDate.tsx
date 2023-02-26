import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_MESSAGE_DETAILS,
  DASHBOARD_MESSAGE_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateMessageAdminMutation,
  CreateMessageAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateMessageAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_MESSAGE_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateMessageAdminInputs>({
    resolver: classValidatorResolver(CreateMessageAdminInputs),
    mode: "onChange",
    defaultValues: {
      text: "",
      userId: "",
      isActive: true,
      customerIds: [],
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_MESSAGE__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_MESSAGE__MESSAGE,
            href: DASHBOARD_MESSAGE_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_MESSAGE__NEW_MESSAGE },
        ],
      },
    });
  }, [setConfig]);

  const [createMessageAdmin, { loading }] = useMutation<
    CreateMessageAdminMutation,
    CreateMessageAdminMutationVariables
  >(MUTATION_CREATE_MESSAGE_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createMessageAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_MESSAGE__SUCCESS, {
        variant: "success",
      });

      navigate(
        url.generate(DASHBOARD_MESSAGE_DETAILS, {
          messageId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateMessageAdminInputs> = (
    createMessageAdminInputs
  ) => {
    createMessageAdmin({
      variables: { createMessageAdminInputs },
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
