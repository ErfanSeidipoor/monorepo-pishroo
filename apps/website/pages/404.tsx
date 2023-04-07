import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { NotFoundPage } from "@website/components/pages/404";

export function NotFound() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Not Found");
    setPageTitle(TEXTS.WEBSITE_PAGE__NOT_FOUND__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <NotFoundPage />;
}

export default NotFound;
