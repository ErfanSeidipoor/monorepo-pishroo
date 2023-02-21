import { useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PRODUCER_AGENT_DETAILS,
  DASHBOARD_PRODUCER_AGENT_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProducerAgentAdminMutation,
  CreateProducerAgentAdminMutationVariables,
} from "@admin/gql/graphql";

import { CreateProducerAgentAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PRODUCER_AGENT_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProducerAgentAdminInputs>({
    resolver: classValidatorResolver(CreateProducerAgentAdminInputs),
    mode: "onChange",
    defaultValues: {
      producerId: "",
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
      pageName: TEXTS.PAGE_NEW_PRODUCER_AGENT__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER_AGENT__PRODUCER_AGENT,
            href: DASHBOARD_PRODUCER_AGENT_ROUTE,
          },
          { label: TEXTS.PAGE_NEW_PRODUCER_AGENT__NEW_PRODUCER_AGENT },
        ],
      },
    });
  }, [setConfig]);

  const [createProducerAgentAdmin, { loading }] = useMutation<
    CreateProducerAgentAdminMutation,
    CreateProducerAgentAdminMutationVariables
  >(MUTATION_CREATE_PRODUCER_AGENT_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProducerAgentAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCER_AGENT__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_PRODUCER_AGENT_DETAILS, {
          producerAgentId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateProducerAgentAdminInputs> = (
    createProducerAgentAdminInputs
  ) => {
    createProducerAgentAdmin({
      variables: { createProducerAgentAdminInputs },
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
