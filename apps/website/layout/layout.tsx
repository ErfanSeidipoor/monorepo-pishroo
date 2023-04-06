import cls from "classnames";
import Head from "next/head";
import { FC } from "react";

import { Footer, Header } from "@pishroo/website-components";
import {
  AboutUsIcon,
  CertificatesIcon,
  PartnersIcon,
  PhoneIcon,
  ProductIcon,
  ProjectIcon,
} from "./icons";
import {
  ABOUT_US_ROUTE,
  CONTACT_US_ROUTE,
  PRODUCT_ROUTE,
  PROJECT_ROUTE,
} from "@website/constants";

import TEXTS from "@pishroo/texts";

import { useLayout } from "@website/hooks";

export const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { page, pageTitle } = useLayout();

  const links = [
    {
      name: TEXTS.PRODUCT,
      href: PRODUCT_ROUTE,
      selected: page === "Product",
      icon: <ProductIcon />,
    },
    {
      name: TEXTS.PROJECT,
      href: PROJECT_ROUTE,
      selected: page === "Project",
      icon: <ProjectIcon />,
    },
    {
      name: TEXTS.PARTNERS,
      href: "/#partners",
      selected: page === "Partners",
      icon: <PartnersIcon />,
    },
    {
      name: TEXTS.CERTIFICATES,
      href: "/#certificates",
      icon: <CertificatesIcon />,
    },
    {
      name: TEXTS.ABOUT_US,
      href: ABOUT_US_ROUTE,
      selected: page === "About Us",
      icon: <AboutUsIcon />,
    },
    {
      name: TEXTS.CONTACT_US,
      href: CONTACT_US_ROUTE,
      selected: page === "Contact Us",
      icon: <PhoneIcon />,
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={cls("flex", "flex-col", "min-h-screen", "bg-gray-50")}>
        <Header links={links} phone={TEXTS.WEBSITE_PAGE__LAYOUT__PHONE} />
        <div
          className={cls(
            "container",
            "mx-auto",
            "py-6",
            "px-1",
            "flex-grow",
            "mb-48"
          )}
        >
          {children}
        </div>
        <Footer
          links={links}
          linksText={TEXTS.WEBSITE_PAGE__LAYOUT__LINKS}
          socialMediaText={TEXTS.WEBSITE_PAGE__LAYOUT__SOCIAL_MEDIA}
          sloganText={TEXTS.WEBSITE_PAGE__LAYOUT__SLOGAN}
          copyRightText={TEXTS.WEBSITE_PAGE__LAYOUT__COPYRIGHT}
          instagram={TEXTS.WEBSITE_PAGE__LAYOUT__INSTAGRAM}
          whatsapp={TEXTS.WEBSITE_PAGE__LAYOUT__WHATSAPP}
          email={TEXTS.WEBSITE_PAGE__LAYOUT__EMAIL}
          telegram={TEXTS.WEBSITE_PAGE__LAYOUT__TELEGRAM}
          phone={TEXTS.WEBSITE_PAGE__LAYOUT__PHONE}
        />
      </div>
    </>
  );
};
