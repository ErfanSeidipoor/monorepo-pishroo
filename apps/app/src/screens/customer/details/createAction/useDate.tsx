import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";

import { CUSTOMER_ACTION_DETAILS_ROUTE } from "@app/constants";
import { useCustomerDetails } from "@app/hooks";
import TEXTS from "libs/texts/src";

import {
  CreateCustomerActionAdminInputsMutation,
  CreateCustomerActionAdminInputsMutationVariables,
} from "@app/gql/graphql";

import { CreateCustomerActionAdminInputs } from "libs/dto/src/admin";

import { MUTATION_CREATE_CUSTOMER_ACTION_ADMIN } from "./gql";

const useData = () => {
  const { customerId } = useCustomerDetails();
  const { navigate } = useNavigation();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateCustomerActionAdminInputs>({
    resolver: classValidatorResolver(CreateCustomerActionAdminInputs),
    mode: "onChange",
    defaultValues: {
      text: "",
      customerId,
    },
  });

  const [createCustomerActionAdmin, { loading }] = useMutation<
    CreateCustomerActionAdminInputsMutation,
    CreateCustomerActionAdminInputsMutationVariables
  >(MUTATION_CREATE_CUSTOMER_ACTION_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (response) => {
      const {
        createCustomerActionAdmin: { id },
      } = response;
      navigate(CUSTOMER_ACTION_DETAILS_ROUTE, { customerActionId: id });
      Alert.alert(TEXTS.PAGE_NEW_CUSTOMER_ACTION__SUCCESS);
    },
  });

  const onSubmit: SubmitHandler<CreateCustomerActionAdminInputs> = (
    createCustomerActionAdminInputs
  ) => {
    createCustomerActionAdmin({
      variables: {
        createCustomerActionAdminInputs,
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
