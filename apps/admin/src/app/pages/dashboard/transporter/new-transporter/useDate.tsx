import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_TRANSPORTER_DETAILS,
  DASHBOARD_TRANSPORTER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateTransporterAdminMutation,
  CreateTransporterAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateTransporterAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_TRANSPORTER_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateTransporterAdminInputs>({
    resolver: classValidatorResolver(CreateTransporterAdminInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
      address: "",
      cityId: "",
      isActive: true,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER,
            href: DASHBOARD_TRANSPORTER_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_TRANSPORTER__NEW_TRANSPORTER },
        ],
      },
    });
  }, [setConfig]);

  const [createTransporterAdmin, { loading }] = useMutation<
    CreateTransporterAdminMutation,
    CreateTransporterAdminMutationVariables
  >(MUTATION_CREATE_TRANSPORTER_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createTransporterAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_TRANSPORTER__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_TRANSPORTER_DETAILS, { transporterId: id })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateTransporterAdminInputs> = (
    createTransporterAdminInputs
  ) => {
    createTransporterAdmin({ variables: { createTransporterAdminInputs } });
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
