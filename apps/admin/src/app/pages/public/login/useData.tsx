import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";

import { LoginAdminInputs } from "@pishroo/dto";
import TEXTS from "@pishroo/texts";
import { LoginAdminQuery } from "@admin/gql/graphql";
import {
  signInFailed,
  signInStart,
  signInSuccess,
} from "@admin/store/user/user.action";
import { selectIsLoading } from "@admin/store/user/user.selector";
import { DASHBOARD_ROUTE } from "@admin/constants";

import { QUERY_LOGIN_ADMIN } from "./gql";
import { useNavigate } from "react-router-dom";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

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
      enqueueSnackbar(error.message, { variant: "error" });
      dispatch(signInFailed(error));
    },
    onCompleted: ({ loginAdmin }) => {
      enqueueSnackbar(TEXTS.PAGE_LOGIN__WELCOME, { variant: "success" });
      dispatch(signInSuccess(loginAdmin));
      navigate(DASHBOARD_ROUTE);
    },
  });

  const onSubmit: SubmitHandler<LoginAdminInputs> = (loginAdminInputs) => {
    dispatch(signInStart());
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
