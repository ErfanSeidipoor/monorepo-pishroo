import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";

import { TRANSPORTER_ACTION_DETAILS_ROUTE } from "@app/constants";
import { useTransporterDetails } from "@app/hooks";
import TEXTS from "libs/texts/src";

import {
  CreateTransporterActionAdminInputsMutation,
  CreateTransporterActionAdminInputsMutationVariables,
} from "@app/gql/graphql";

import { CreateTransporterActionAdminInputs } from "libs/dto/src/admin";

import { MUTATION_CREATE_TRANSPORTER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { transporterId } = useTransporterDetails();
  const { navigate } = useNavigation();

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

  const [createTransporterActionAdmin, { loading }] = useMutation<
    CreateTransporterActionAdminInputsMutation,
    CreateTransporterActionAdminInputsMutationVariables
  >(MUTATION_CREATE_TRANSPORTER_ACTION_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (response) => {
      const {
        createTransporterActionAdmin: { id },
      } = response;
      navigate(TRANSPORTER_ACTION_DETAILS_ROUTE, { transporterActionId: id });
      Alert.alert(TEXTS.PAGE_NEW_TRANSPORTER_ACTION__SUCCESS);
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
