import { FC } from "react";

import { CEO, Description, FAQ } from "./components";

export const AboutUsPage: FC = () => {
  return (
    <>
      <Description />
      <CEO />
      <FAQ />
    </>
  );
};
