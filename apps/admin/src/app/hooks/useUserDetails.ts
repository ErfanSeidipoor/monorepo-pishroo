import { useContext } from "react";
import context from "@admin/pages/dashboard/user/update/context";

export const useUserDetails = () => useContext(context);
