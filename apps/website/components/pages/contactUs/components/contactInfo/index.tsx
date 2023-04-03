import { FC } from "react";
import dynamic from "next/dynamic";
import cls from "classnames";

import { Contact } from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";

import { PhoneIcon, MailIcon, FaxIcon, LocationIcon } from "./icons";

const Map = dynamic(() => import("@pishroo/website-components/lib/Map"), {
  ssr: false,
});

export const ContactInfo: FC = () => {
  return (
    <div className={cls("flex", "flex-wrap", "my-8")}>
      <div className={cls("w-1/2", "mb-2")}>
        <Contact
          title={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__PHONE_TITLE}
          value={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__PHONE_VALUE}
          icon={<PhoneIcon />}
        />
      </div>
      <div className={cls("w-1/2", "mb-2")}>
        <Contact
          title={
            TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__MANAGER_PHONE_TITLE
          }
          value={
            TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__MANAGER_PHONE_VALUE
          }
          icon={<PhoneIcon />}
        />
      </div>
      <div className={cls("w-1/2", "mb-2")}>
        <Contact
          title={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__FAX_TITLE}
          value={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__FAX_VALUE}
          icon={<FaxIcon />}
        />
      </div>
      <div className={cls("w-1/2", "mb-2")}>
        <Contact
          title={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__EMAIL_TITLE}
          value={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__EMAIL_VALUE}
          icon={<MailIcon />}
        />
      </div>
      <div className={cls("w-full", "mb-2")}>
        <Contact
          title={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__ADDRESS_TITLE}
          value={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__ADDRESS_VALUE}
          icon={<LocationIcon />}
        />
      </div>
      <div className={cls("w-full", "mb-2")}>
        <Contact
          title={TEXTS.WEBSITE_PAGE__CONTACT_US__CONTACT_INFO__LOCATION_TITLE}
          value=""
          icon={<LocationIcon />}
        />
      </div>
      <div className={cls("w-full", "mb-2")}>
        <Map width="100%" height="300px" zoom={13} />
      </div>
    </div>
  );
};
