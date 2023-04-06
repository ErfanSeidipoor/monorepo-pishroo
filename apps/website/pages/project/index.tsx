import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ProjectPage } from "@website/components/pages/project";

export function Project() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Project");
    setPageTitle(TEXTS.WEBSITE_PAGE__PROJECT__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ProjectPage />;
}

export default Project;
