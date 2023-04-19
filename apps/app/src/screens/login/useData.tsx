import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useQuery } from "@apollo/client";
import { Alert } from "react-native";

import { LoginAdminInputs } from "libs/dto/src/admin";
import TEXTS from "libs/texts/src";
import { LoginAdminQuery } from "@app/gql/graphql";
import { useUser } from "@app/hooks";

import { NavigationContext } from "@react-navigation/native";

// import {
//   signInFailed,
//   signInStart,
//   signInSuccess,
// } from "@admin/store/user/user.action";
// import { selectIsLoading } from "@admin/store/user/user.selector";
import { PRODUCT_ROUTE } from "@app/constants";

import { QUERY_LOGIN_ADMIN } from "./gql";
// import { useNavigate } from "react-router-dom";

const useData = () => {
  const { isLoading, loginFailed, loginSuccess } = useUser();
  // const { enqueueSnackbar } = useSnackbar();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLoading = useSelector(selectIsLoading);

  const navigation = useContext(NavigationContext);

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

  const { refetch } = useQuery<LoginAdminQuery>(QUERY_LOGIN_ADMIN, {
    fetchPolicy: "standby",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      Alert.alert(error.message);
      console.log({ "error.clientErrors": error.clientErrors });

      loginFailed(error);
      // enqueueSnackbar(error.message, { variant: "error" });
      // dispatch(signInFailed(error));
    },
    onCompleted: ({ loginAdmin }) => {
      Alert.alert(TEXTS.PAGE_LOGIN__WELCOME);
      // enqueueSnackbar(TEXTS.PAGE_LOGIN__WELCOME, { variant: "success" });
      // dispatch(signInSuccess(loginAdmin));
      navigation.navigate(PRODUCT_ROUTE);
      loginSuccess(loginAdmin);
    },
  });

  const onSubmit: SubmitHandler<LoginAdminInputs> = (loginAdminInputs) => {
    // dispatch(signInStart());
    refetch({ loginAdminInputs });
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSubmit,
    isLoading,
  };
};

export default useData;
