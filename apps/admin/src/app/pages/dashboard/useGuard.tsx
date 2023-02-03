import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PUBLIC_LOGIN_ROUTE } from "@admin/constants";
import {
  selectIsLoading,
  selectCurrentUser,
} from "@admin/store/user/user.selector";

const useGuard = () => {
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate(PUBLIC_LOGIN_ROUTE);
    }
  }, [user, isLoading, navigate]);
};

export default useGuard;
