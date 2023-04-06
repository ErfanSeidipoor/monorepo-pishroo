import { FC, useState } from "react";
import cls from "classnames";
import { Logo } from "../Logo";
// import "./index.css";
// import "../tailwind-imports.css";
import { PhoneIcon } from "./icons";

export type IHeader = {
  links: {
    name: string;
    href: string;
    selected?: boolean;
    icon?: React.ReactNode;
  }[];
  phone: string;
};

export const Header: FC<IHeader> = ({ links = [], phone }) => {
  const [open, setOpen] = useState(false);

  const renderLinks = () => {
    return links.map(({ name, href, selected, icon }) => (
      <a
        key={name}
        href={href}
        className={cls(
          "md:text-black",
          "text-white",
          "hover:text-primary",
          "md:hover:text-secondary",
          "md:mx-1",
          "mx-4",
          selected && "!text-primary",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <div className={cls("md:hidden", "fill-black")}>{icon}</div>

        <p className={cls("block", "mx-2")}>{name}</p>
      </a>
    ));
  };

  const rednerHamburger = () => {
    return (
      <button
        id="menu-btn"
        className={cls(
          "block",
          "hamburger",
          "md:hidden",
          "focus:outline-none",
          open && "open"
        )}
        onClick={() => setOpen(!open)}
      >
        <span className={cls("hamburger-top")} />
        <span className={cls("hamburger-middle")} />
        <span className={cls("hamburger-bottom")} />
      </button>
    );
  };

  const renderDesktop = () => {
    return (
      <div className={cls("flex", "items-center", "justify-between")}>
        <a
          style={{ width: "50px" }}
          className={cls("pt-2", "order-3", "md:order-1")}
          href="/"
        >
          <Logo />
        </a>
        <div className={cls("hidden", "md:flex", "order-2")}>
          {renderLinks()}
        </div>
        <div
          style={{ width: "50px" }}
          className={cls("pt-2", "order-1", "md:order-3")}
        />
        {rednerHamburger()}
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div className="md:hidden">
        <div
          id="menu"
          className={cls(
            "absolute",
            "flex-col",
            "items-start",
            "self-end",
            "py-8",
            "mt-10",
            "space-y-6",
            "bg-secondary",
            "sm:w-auto",
            "sm:w-auto",
            "sm:self-center",
            "left-6",
            "right-6",
            "drop-shadow-md",
            "flex",
            open ? "flex" : "hidden",
            "z-50"
          )}
        >
          <div
            style={{ width: "70px" }}
            className={cls("mx-4", "pt-2", "self-center")}
          >
            <Logo />
          </div>
          {renderLinks()}
          <a
            href={`whatsapp://send?abid:${phone}&text=Hi`}
            className={cls(
              "p-2",
              "flex",
              "justify-center",
              "items-center",
              "bg-primary",
              "mx-4",
              "rounded-lg"
            )}
          >
            <h3 className={cls("text-xl", "text-white", "text-center", "ml-2")}>
              {phone}
            </h3>
            <PhoneIcon />
          </a>
        </div>
      </div>
    );
  };

  return (
    <nav className={cls("relative", "container", "mx-auto p-6")}>
      {renderDesktop()}
      {renderMobile()}
    </nav>
  );
};
