import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";
import { HomePage } from "@website/components/pages/home";

export function Index() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Home");
    setPageTitle(TEXTS.WEBSITE_PAGE__HOME__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <HomePage />;
}

export default Index;
