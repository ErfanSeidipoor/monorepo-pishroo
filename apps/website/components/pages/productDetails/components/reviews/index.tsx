import cls from "classnames";
import { FC } from "react";

import { Review } from "@pishroo/website-components";

import TEXTS from "@pishroo/texts";

export const Reviews: FC = () => {
  return (
    <div className={cls("mb-4")}>
      <h3 className={cls("text-lg", "mt-5")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__REVIEWS__TITLE}
      </h3>
      <div>
        <div>
          <Review
            image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/179.jpg"
            reviewer="Erika Cartwright"
            text="Boston's most advanced compression wear technology…ses muscle oxygenation, stabilizes active muscles"
          />
        </div>
        <div>
          <Review
            image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg"
            reviewer="Angelo Labadie"
            text="The Nagasaki Lander is the trademarked name of sev…i sport bikes, that started with the 1984 ABC800J"
          />
        </div>
        <div>
          <Review
            image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg"
            reviewer="Rudolph Torphy"
            text="Boston's most advanced compression wear technology…ses muscle oxygenation, stabilizes active muscles"
          />
        </div>
      </div>
    </div>
  );
};
