import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ProjectDetailsPage } from "@website/components/pages/projectDetails";

export function Project() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Project Details");
    setPageTitle(TEXTS.WEBSITE_PAGE__PROJECT_DETAILS__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ProjectDetailsPage />;
}

export default Project;
