import { useContext } from "react";
import context from "@admin/pages/dashboard/user/details/context";

export const useUserDetails = () => useContext(context);
