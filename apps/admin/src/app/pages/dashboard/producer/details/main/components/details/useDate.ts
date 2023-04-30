import { useMutation } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  UpdateProducerAdminMutation,
  UpdateProducerAdminMutationVariables,
} from "@admin/gql/graphql";
import { useProducerDetails } from "@admin/hooks";

import { UpdateProducerAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";

import { MUTATION_UPDATE_PRODUCER_ADMIN } from "./gql";

const useData = () => {
  const { getProducerLoading, producerId, producer } =
    useProducerDetails();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<UpdateProducerAdminInputs>({
    resolver: classValidatorResolver(UpdateProducerAdminInputs),
    mode: "onChange",
    defaultValues: {
      producerId,
      name: "",
      phone: "",
      email: "",
      description: "",
      address: "",
      cityId: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (producer) {
      const { name, phone, email, description, address, isActive, cityId } =
        producer;

      setValue("name", name || "");
      setValue("phone", phone || "");
      setValue("email", email || "");
      setValue("description", description || "");
      setValue("address", address || "");
      setValue("isActive", !!isActive);
      setValue("cityId", cityId || "");
    }
  }, [producer, setValue]);

  const [updateProducerAdmin, { loading: updateProducerLoading }] =
    useMutation<
      UpdateProducerAdminMutation,
      UpdateProducerAdminMutationVariables
    >(MUTATION_UPDATE_PRODUCER_ADMIN, {
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      },
      onCompleted: () => {
        enqueueSnackbar(TEXTS.PAGE_PRODUCER_UPDATE__SUCCESS, {
          variant: "success",
        });
      },
    });

  const onSubmit: SubmitHandler<UpdateProducerAdminInputs> = (
    updateProducerAdminInputs
  ) => {
    updateProducerAdmin({ variables: { updateProducerAdminInputs } });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading: updateProducerLoading || getProducerLoading,
  };
};

export default useData;
