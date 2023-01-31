import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useQuery } from "@apollo/client";

import { LoginAdminInputs } from "@pishroo/dto";

import { QUERY_LOGIN_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginAdminInputs>({
    resolver: classValidatorResolver(LoginAdminInputs),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { refetch, loading } = useQuery(QUERY_LOGIN_ADMIN, {
    fetchPolicy: "standby",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
    onCompleted: (data) => {
      console.log("onCompleted", { data });
    },
  });

  const onSubmit: SubmitHandler<LoginAdminInputs> = (loginAdminInputs) =>
    refetch({ loginAdminInputs });

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
