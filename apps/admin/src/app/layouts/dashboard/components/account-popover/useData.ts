import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginAdminQuery } from "@admin/gql/graphql";
import {
  signOutFailed,
  signOutStart,
  signOutSuccess,
} from "@admin/store/user/user.action";
import { PUBLIC_ROUTE } from "@admin/constants";
import {
  selectIsLoading,
  selectUserReducer,
} from "@admin/store/user/user.selector";

import { QUERY_LOGOUT_ADMIN } from "./gql";

const useData = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const { currentUser } = useSelector(selectUserReducer);

  const [open, setOpen] = useState<(EventTarget & HTMLButtonElement) | null>(
    null
  );

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const { refetch } = useQuery<LoginAdminQuery>(QUERY_LOGOUT_ADMIN, {
    fetchPolicy: "standby",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
      dispatch(signOutFailed(error));
    },
    onCompleted: () => {
      dispatch(signOutSuccess());
      navigate(PUBLIC_ROUTE);
    },
  });

  const logOut = () => {
    if (!isLoading) {
      dispatch(signOutStart());
      refetch();
    }
  };
  return {
    handleClose,
    handleOpen,
    open,
    logOut,
    isLoading,
    currentUser,
    navigate,
  };
};

export default useData;
