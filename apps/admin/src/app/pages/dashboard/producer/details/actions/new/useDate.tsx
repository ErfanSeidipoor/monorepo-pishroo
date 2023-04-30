import { useProducerDetails, useDashboardLayout } from "@admin/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import {
  DASHBOARD_PRODUCER_DETAILS,
  DASHBOARD_PRODUCER_ACTION_DETAILS,
  DASHBOARD_PRODUCER_ACTION_ROUTE,
  DASHBOARD_PRODUCER_ROUTE,
  DASHBOARD_ROUTE,
} from "@admin/constants";
import {
  CreateProducerActionAdminInputsMutation,
  CreateProducerActionAdminInputsMutationVariables,
} from "@admin/gql/graphql";

import { CreateProducerActionAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { MUTATION_CREATE_PRODUCER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { setConfig } = useDashboardLayout();
  const { producerId, producer } = useProducerDetails();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateProducerActionAdminInputs>({
    resolver: classValidatorResolver(CreateProducerActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      text: "",
      producerId,
    },
  });

  useEffect(() => {
    setConfig({
      pageName: TEXTS.PAGE_NEW_PRODUCER_ACTION__PAGE_TITLE,
      breadcrumbs: {
        links: [
          { label: TEXTS.DASHBOARD, href: DASHBOARD_ROUTE },
          {
            label: TEXTS.PAGE_PRODUCER__PRODUCER,
            href: DASHBOARD_PRODUCER_ROUTE,
          },
          {
            label:
              producer?.name || TEXTS.PAGE_PRODUCER_UPDATE__UPDATE_PRODUCER,
            href: producer
              ? url.generate(DASHBOARD_PRODUCER_DETAILS, {
                  producerId: producer?.id,
                })
              : DASHBOARD_PRODUCER_ROUTE,
          },
          {
            label: TEXTS.PAGE_PRODUCER_ACTION__PRODUCER_ACTION,
            href: url.generate(DASHBOARD_PRODUCER_ACTION_ROUTE, {
              producerId,
            }),
          },
          { label: TEXTS.PAGE_NEW_PRODUCER_ACTION__NEW_PRODUCER_ACTION },
        ],
      },
    });
  }, [setConfig, producer, producerId]);

  const [createProducerActionAdmin, { loading }] = useMutation<
    CreateProducerActionAdminInputsMutation,
    CreateProducerActionAdminInputsMutationVariables
  >(MUTATION_CREATE_PRODUCER_ACTION_ADMIN, {
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (response) => {
      const {
        createProducerActionAdmin: { id },
      } = response;

      enqueueSnackbar(TEXTS.PAGE_NEW_PRODUCER_ACTION__SUCCESS, {
        variant: "success",
      });
      navigate(
        url.generate(DASHBOARD_PRODUCER_ACTION_DETAILS, {
          producerId,
          producerActionId: id,
        })
      );
    },
  });

  const onSubmit: SubmitHandler<CreateProducerActionAdminInputs> = (
    createProducerActionAdminInputs
  ) => {
    createProducerActionAdmin({
      variables: {
        createProducerActionAdminInputs,
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
