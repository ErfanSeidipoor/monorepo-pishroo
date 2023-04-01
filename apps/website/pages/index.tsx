import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

export function Index() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Home");
    setPageTitle(TEXTS.WEBSITE_PAGE__HOME__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return (
    <h1 className="text-3xl font-bold underline">
      This is a test Hello world!
    </h1>
  );
}

export default Index;
