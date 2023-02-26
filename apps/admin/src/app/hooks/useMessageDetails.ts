import { useContext } from "react";
import context from "@admin/pages/dashboard/message/update/context";

export const useMessageDetails = () => useContext(context);
