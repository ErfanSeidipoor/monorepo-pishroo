import { useContext } from "react";
import context from "@app/providers/user/context";

export const useUser = () => useContext(context);
