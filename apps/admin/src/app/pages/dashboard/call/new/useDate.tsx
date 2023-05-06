import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_CALL_DETAILS,
  DASHBOARD_CALL_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateCallAdminMutation,
  CreateCallAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateCallAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_CALL_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCallAdminInputs>({
    resolver: classValidatorResolver(CreateCallAdminInputs),
    mode: "onChange",
    defaultValues: {
      newPhone: "",
      description: "",
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_CALL__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_CALL__CALL,
            href: DASHBOARD_CALL_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_CALL__NEW_CALL },
        ],
      },
    });
  }, [setConfig]);

  const [createCallAdmin, { loading }] = useMutation<
    CreateCallAdminMutation,
    CreateCallAdminMutationVariables
  >(MUTATION_CREATE_CALL_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createCallAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_CALL__SUCCESS, {
        variant: "success",
      });

      navigate(
        url.generate(DASHBOARD_CALL_DETAILS, {
          callId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateCallAdminInputs> = (
    createCallAdminInputs
  ) => {
    createCallAdmin({
      variables: { createCallAdminInputs },
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
