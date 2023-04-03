import { FC } from "react";

import { Description, ContactInfo, SaleExperts } from "./components";

export const ContactUsPage: FC = () => {
  return (
    <>
      <Description />
      <ContactInfo />
      <SaleExperts />
    </>
  );
};
