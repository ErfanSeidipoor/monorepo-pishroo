import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { AboutUsPage } from "@website/components/pages/aboutUs";

export function AboutUs() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("About Us");
    setPageTitle(TEXTS.WEBSITE_PAGE__ABOUT_US__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <AboutUsPage />;
}

export default AboutUs;
