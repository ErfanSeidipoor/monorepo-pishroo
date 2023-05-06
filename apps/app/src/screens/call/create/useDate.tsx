import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";

import { CALL_DETAILS_ROUTE } from "@app/constants";
import TEXTS from "libs/texts/src";

import {
  CreateCallAdminMutation,
  CreateCallAdminMutationVariables,
} from "@app/gql/graphql";

import { CreateCallAdminInputs } from "libs/dto/src/admin/call/create-call.inputs";

import { MUTATION_CREATE_CALL_ADMIN } from "./gql";

const useData = () => {
  const { navigate } = useNavigation();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCallAdminInputs>({
    resolver: classValidatorResolver(CreateCallAdminInputs),
    mode: "onChange",
    defaultValues: {
      description: "",
      newPhone: "",
    },
  });

  const [createCallAdmin, { loading }] = useMutation<
    CreateCallAdminMutation,
    CreateCallAdminMutationVariables
  >(MUTATION_CREATE_CALL_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (response) => {
      const {
        createCallAdmin: { id },
      } = response;
      navigate(CALL_DETAILS_ROUTE, { callId: id });
      Alert.alert(TEXTS.PAGE_NEW_CALL__SUCCESS);
    },
  });

  const onSubmit: SubmitHandler<CreateCallAdminInputs> = (
    createCallAdminInputs
  ) => {
    createCallAdmin({
      variables: {
        createCallAdminInputs,
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
