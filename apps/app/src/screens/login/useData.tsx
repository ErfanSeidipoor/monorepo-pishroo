import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Alert } from "react-native";

import { LoginAdminInputs } from "libs/dto/src/admin/auth/login.inputs";
import TEXTS from "libs/texts/src";

import { LoginAdminQuery } from "@app/gql/graphql";
import { useUser } from "@app/hooks";

import { QUERY_LOGIN_ADMIN } from "./gql";
import { IsAlphanumeric, IsString, MaxLength } from "class-validator";

const useData = () => {
  const { loginFailed, loginSuccess } = useUser();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginAdminInputs>({
    resolver: classValidatorResolver(LoginAdminInputs),
    mode: "onChange",
    defaultValues: {
      username: "superadmin",
      password: "1234",
    },
  });

  const { loading, refetch } = useQuery<LoginAdminQuery>(QUERY_LOGIN_ADMIN, {
    fetchPolicy: "standby",
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      console.log({ error });
      Alert.alert(error.message);
      loginFailed(error);
    },
    onCompleted: ({ loginAdmin }) => {
      console.log({ loginAdmin });
      Alert.alert(TEXTS.APP_SCREEN_LOGIN__SUCCESS);
      loginSuccess(loginAdmin);
    },
  });

  const onSubmit: SubmitHandler<LoginAdminInputs> = (loginAdminInputs) => {
    refetch({ loginAdminInputs });
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
