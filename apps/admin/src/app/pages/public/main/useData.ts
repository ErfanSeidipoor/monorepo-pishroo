import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DASHBOARD_ROUTE } from "@admin/constants";
import { selectCurrentUser } from "@admin/store/user/user.selector";

const useData = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [user, navigate]);

  return {};
};

export default useData;
