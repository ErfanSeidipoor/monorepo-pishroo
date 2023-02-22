import { useContext } from "react";
import context from "@admin/pages/dashboard/project/update/context";

export const useProjectDetails = () => useContext(context);
