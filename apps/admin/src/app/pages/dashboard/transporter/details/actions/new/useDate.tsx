import { useTransporterDetails, useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_TRANSPORTER_DETAILS,
  DASHBOARD_TRANSPORTER_ACTION_DETAILS,
  DASHBOARD_TRANSPORTER_ACTION_ROUTE,
  DASHBOARD_TRANSPORTER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateTransporterActionAdminInputsMutation,
  CreateTransporterActionAdminInputsMutationVariables,
} from "@admin/gql/graphql";

import { CreateTransporterActionAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_TRANSPORTER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { transporterId, transporter } = useTransporterDetails();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateTransporterActionAdminInputs>({
    resolver: classValidatorResolver(CreateTransporterActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      text: "",
      transporterId,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER__TRANSPORTER,
            href: DASHBOARD_TRANSPORTER_ROUTE,
          },
          {
            label: transporter
              ? transporter?.name
              : TEXTS.PAGE_TRANSPORTER_UPDATE__UPDATE_TRANSPORTER,
            href: transporter
              ? url.generate(DASHBOARD_TRANSPORTER_DETAILS, {
                  transporterId: transporter?.id,
                })
              : DASHBOARD_TRANSPORTER_ROUTE,
          },
          {
            label: TEXTS.PAGE_TRANSPORTER_ACTION__TRANSPORTER_ACTION,
            href: url.generate(DASHBOARD_TRANSPORTER_ACTION_ROUTE, {
              transporterId,
            }),
          },
          { label: TEXTS.PAGE_NEW_TRANSPORTER_ACTION__NEW_TRANSPORTER_ACTION },
        ],
      },
    });
  }, [setConfig, transporter, transporterId]);

  const [createTransporterActionAdmin, { loading }] = useMutation<
    CreateTransporterActionAdminInputsMutation,
    CreateTransporterActionAdminInputsMutationVariables
  >(MUTATION_CREATE_TRANSPORTER_ACTION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createTransporterActionAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_TRANSPORTER_ACTION__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_TRANSPORTER_ACTION_DETAILS, {
          transporterId,
          transporterActionId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateTransporterActionAdminInputs> = (
    createTransporterActionAdminInputs
  ) => {
    createTransporterActionAdmin({
      variables: {
        createTransporterActionAdminInputs,
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
