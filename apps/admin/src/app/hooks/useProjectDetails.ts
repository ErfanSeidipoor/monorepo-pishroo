import { useContext } from "react";
import context from "@admin/pages/dashboard/project/details/context";

export const useProjectDetails = () => useContext(context);
