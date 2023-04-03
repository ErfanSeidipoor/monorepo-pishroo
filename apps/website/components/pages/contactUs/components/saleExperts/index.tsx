import Image from "next/image";
import { FC } from "react";
import cls from "classnames";

import { SaleExpert } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

import assets from "./assets";

const ITEMS = [
  {
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/682.jpg",
    name: "Wendy Christiansen",
    phone: "1-983-443-9740 x192",
    email: "Blanca.Auer@yahoo.com",
    provinces: ["Cambridgeshire", "Borders", "Cambridgeshire", "Borders"],
  },
  {
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/307.jpg",
    name: "Bonnie Konopelski",
    phone: "1-710-566-7008 x062",
    email: "Vivien49@hotmail.com",
    provinces: ["Buckinghamshire", "Avon", "Bedfordshire", "Buckinghamshire"],
  },
  {
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/262.jpg",
    name: "Salvatore King",
    phone: "1-448-641-4891 x63468",
    email: "Leda.Hoppe@hotmail.com",
    provinces: [
      "Avon",
      "Buckinghamshire",
      "Borders",
      "Avon",
      "Borders",
      "Cambridgeshire",
      "Borders",
    ],
  },
  {
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg",
    name: "Mr. Ted Lakin",
    phone: "429-508-8252 x919",
    email: "Curtis.Nikolaus45@yahoo.com",
    provinces: [
      "Buckinghamshire",
      "Borders",
      "Avon",
      "Buckinghamshire",
      "Avon",
      "Bedfordshire",
      "Cambridgeshire",
    ],
  },
  {
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/240.jpg",
    name: "Kimberly Champlin",
    phone: "855.654.3932",
    email: "Taya_Langosh38@hotmail.com",
    provinces: [
      "Buckinghamshire",
      "Cambridgeshire",
      "Bedfordshire",
      "Borders",
      "Borders",
      "Cambridgeshire",
    ],
  },
];

export const SaleExperts: FC = () => {
  const renderItems = () => {
    return ITEMS.map((props) => (
      <div key={props.name} className={cls("my-4", "relative", "z-10")}>
        <SaleExpert {...props} />
      </div>
    ));
  };

  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl")}>
        {TEXTS.WEBSITE_PAGE__CONTACT_US__SALEEXPERTS__TITLE}
      </h1>
      {renderItems()}
    </div>
  );
};
