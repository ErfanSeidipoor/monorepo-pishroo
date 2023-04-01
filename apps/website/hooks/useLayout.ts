import { useContext } from "react";
import context from "@website/layout/context";

export const useLayout = () => useContext(context);
