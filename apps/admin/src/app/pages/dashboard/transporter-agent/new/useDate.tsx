import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_TRANSPORTER_AGENT_DETAILS,
  DASHBOARD_TRANSPORTER_AGENT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateTransporterAgentAdminMutation,
  CreateTransporterAgentAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateTransporterAgentAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_TRANSPORTER_AGENT_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateTransporterAgentAdminInputs>({
    resolver: classValidatorResolver(CreateTransporterAgentAdminInputs),
    mode: "onChange",
    defaultValues: {
      transporterId: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      isActive: true,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_TRANSPORTER_AGENT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_TRANSPORTER_AGENT__TRANSPORTER_AGENT,
            href: DASHBOARD_TRANSPORTER_AGENT_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_TRANSPORTER_AGENT__NEW_TRANSPORTER_AGENT },
        ],
      },
    });
  }, [setConfig]);

  const [createTransporterAgentAdmin, { loading }] = useMutation<
    CreateTransporterAgentAdminMutation,
    CreateTransporterAgentAdminMutationVariables
  >(MUTATION_CREATE_TRANSPORTER_AGENT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createTransporterAgentAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_TRANSPORTER_AGENT__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_TRANSPORTER_AGENT_DETAILS, {
          transporterAgentId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateTransporterAgentAdminInputs> = (
    createTransporterAgentAdminInputs
  ) => {
    createTransporterAgentAdmin({
      variables: { createTransporterAgentAdminInputs },
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
