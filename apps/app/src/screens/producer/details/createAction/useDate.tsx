import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";

import { PRODUCER_ACTION_DETAILS_ROUTE } from "@app/constants";
import { useProducerDetails } from "@app/hooks";
import TEXTS from "libs/texts/src";

import {
  CreateProducerActionAdminInputsMutation,
  CreateProducerActionAdminInputsMutationVariables,
} from "@app/gql/graphql";

import { CreateProducerActionAdminInputs } from "libs/dto/src/admin";

import { MUTATION_CREATE_PRODUCER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { producerId } = useProducerDetails();
  const { navigate } = useNavigation();

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

  const [createProducerActionAdmin, { loading }] = useMutation<
    CreateProducerActionAdminInputsMutation,
    CreateProducerActionAdminInputsMutationVariables
  >(MUTATION_CREATE_PRODUCER_ACTION_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (response) => {
      const {
        createProducerActionAdmin: { id },
      } = response;
      navigate(PRODUCER_ACTION_DETAILS_ROUTE, { producerActionId: id });
      Alert.alert(TEXTS.PAGE_NEW_PRODUCER_ACTION__SUCCESS);
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
