import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ContactUsPage } from "@website/components/pages/contactUs";

export function AboutUs() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Contact Us");
    setPageTitle(TEXTS.WEBSITE_PAGE__CONTACT_US__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ContactUsPage />;
}

export default AboutUs;
