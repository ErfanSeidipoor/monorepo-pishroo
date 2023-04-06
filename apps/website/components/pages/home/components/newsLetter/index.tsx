import { FC, useState } from "react";
import cls from "classnames";
import { EmailInput } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";
import { MailIcon } from "./icons";

export const NewsLetter: FC = () => {
  const [email, setEmail] = useState("");
  return (
    <div className={cls("my-8")}>
      <div
        className={cls(
          "m-auto",
          "my-32",
          "bg-secondary",
          "flex",
          "md:flex-row",
          "flex-col",
          "text-white",
          "max-w-4xl",
          "rounded-3xl",
          "items-center",
          "justify-center"
        )}
      >
        <div
          className={cls(
            "h-48",
            "w-48",
            "rounded-full",
            "flex",
            "justify-center",
            "items-center",
            "scale-150",
            "relative",
            "bg-secondary",
            "bottom-10",
            "md:bottom-0"
          )}
        >
          <MailIcon />
        </div>
        <div className={cls("flex-grow")}>
          <div
            className={cls(
              "md:mx-20",
              "mx-4",
              "h-full",
              "flex",
              "justify-center",
              "items-center",
              "flex-col",
              "mb-16",
              "md:mb-0"
            )}
          >
            <p className={cls("my-4", "text-center")}>
              {TEXTS.WEBSITE_PAGE__HOME__NEWSLETTER__DESCRIPTION}
            </p>
            <div className={cls("w-full")}>
              <EmailInput
                placeholder={
                  TEXTS.WEBSITE_PAGE__HOME__NEWSLETTER__EMAIL_PLACEHOLDER
                }
                value={email}
                onChange={(value) => setEmail(value)}
                buttonTitle={
                  TEXTS.WEBSITE_PAGE__HOME__NEWSLETTER__EMAIL_LET_ME_KNOW
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
