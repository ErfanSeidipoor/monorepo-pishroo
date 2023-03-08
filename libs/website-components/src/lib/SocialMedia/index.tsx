import { FC } from "react";
import cls from "classnames";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  TelegramIcon,
} from "./icons";

import "../tailwind-imports.css";

export type ISocialMedia = {
  instagram?: string;
  whatsApp?: string;
  email?: string;
  telegram?: string;
  phone?: string;
};

export const SocialMedia: FC<ISocialMedia> = ({
  instagram,
  whatsApp,
  email,
  telegram,
  phone,
}) => {
  return (
    <div className={cls("inline-flex")}>
      <a
        href={`whatsapp://send?abid:${whatsApp}&text=Hi`}
        className={cls(
          "rounded-md",
          "border-r-white",
          "border-2",
          "p-2",
          "ml-1",
          "btn",
          "bg-secondary",
          "hover:bg-secondary/80"
        )}
      >
        {<WhatsAppIcon />}
      </a>
      <a
        href={`mailto:${email}`}
        className={cls(
          "rounded-md",
          "border-r-white",
          "border-2",
          "p-2",
          "ml-1",
          "btn",
          "bg-secondary",
          "hover:bg-secondary/80"
        )}
      >
        {<MailIcon />}
      </a>
      <a
        href={`tel:${phone}`}
        className={cls(
          "rounded-md",
          "border-r-white",
          "border-2",
          "p-2",
          "ml-1",
          "btn",
          "bg-secondary",
          "hover:bg-secondary/80"
        )}
      >
        {<PhoneIcon />}
      </a>
      <a
        href={instagram}
        className={cls(
          "rounded-md",
          "border-r-white",
          "border-2",
          "p-2",
          "ml-1",
          "btn",
          "bg-secondary",
          "hover:bg-secondary/80"
        )}
      >
        {<InstagramIcon />}
      </a>
      <a
        href={`https://t.me/${telegram}`}
        className={cls(
          "rounded-md",
          "border-r-white",
          "border-2",
          "p-2",
          "ml-1",
          "btn",
          "bg-secondary",
          "hover:bg-secondary/80"
        )}
      >
        {<TelegramIcon />}
      </a>
    </div>
  );
};

export default SocialMedia;
