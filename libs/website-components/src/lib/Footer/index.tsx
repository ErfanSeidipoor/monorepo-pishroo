import cls from "classnames";
import { FC } from "react";
import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";
import "../tailwind-imports.css";

export type IFooter = {
  links: {
    name: string;
    href: string;
    selected?: boolean;
  }[];
  linksText?: string;
  socialMediaText?: string;
  sloganText?: string;
  copyRightText?: string;
};

export const Footer: FC<IFooter> = ({
  links = [],
  linksText = "Links",
  socialMediaText = "SocialMedia",
  sloganText = "Slogan",
  copyRightText = "© 2023 Next Retail Ltd. All rights reserved.",
}) => {
  const renderSocialMedia = () => {
    return (
      <div className={cls("mt-4")}>
        <p className={cls("text-base", "mb-2", "text-center", "md:text-right")}>
          {socialMediaText}
        </p>
        <SocialMedia />
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <div className={cls("mt-4")}>
        <p className={cls("text-base", "mb-2", "text-center", "md:text-right")}>
          {linksText}
        </p>
        <div className={cls("flex", "flex-wrap", "justify-center")}>
          {links.map(({ name, href, selected }) => (
            <a
              href={href}
              className={cls("text-white", selected && "!text-primary")}
            >
              <p className={cls("block", "ml-4", "text-right")}>{name}</p>
            </a>
          ))}
        </div>
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <div className={cls("mt-4")}>
        <Logo width="100px" />
        <p className={cls("text-base", "mt-2", "text-center", "md:text-right")}>
          {sloganText}
        </p>
      </div>
    );
  };

  return (
    <div
      className={cls("bg-secondary", "pt-20")}
      style={{ borderRadius: "50% 50% 0% 0%" }}
    >
      <footer
        className={cls(
          "relative",
          "container",
          "mx-auto",
          "p-6",
          "flex",
          "flex-wrap",
          "md:justify-between",
          "text-white",
          "justify-center"
        )}
      >
        {renderSocialMedia()}
        {renderLinks()}
        {renderLogo()}
      </footer>
      <p className={cls("text-center", "text-primary", "mt-2", "text-sm")}>
        {copyRightText}
      </p>
    </div>
  );
};
