import { FC } from "react";
import cls from "classnames";
import {
  ProductCard,
  Slider,
  Filter,
  Partner,
} from "@pishroo/website-components";

import { faker } from "@faker-js/faker";
import TEXTS from "@pishroo/texts";

const ITEMS = [
  {
    image: faker.image.abstract(),
    name: "Gorgeous",
  },
  {
    image: "https://loremflickr.com/640/480/animals",
    name: "Electronic",
  },
  {
    image: "https://loremflickr.com/640/480/business",
    name: "Tasty",
  },
  {
    image: "https://loremflickr.com/640/480/people",
    name: "Unbranded",
  },
  {
    image: "https://loremflickr.com/640/480/city",
    name: "Awesome",
  },
  {
    image: "https://loremflickr.com/640/480/fashion",
    name: "Luxurious Steel Table",
  },
  {
    image: "https://loremflickr.com/640/480/nightlife",
    name: "Generic Fresh Tuna",
  },
  {
    image: "https://loremflickr.com/640/480/sports",
    name: "Incredible",
  },
  {
    image: "https://loremflickr.com/640/480/technics",
    name: "Unbranded",
  },
  {
    image: "https://loremflickr.com/640/480/transport",
    name: "Electronics",
  },
];

export const Partners: FC = () => {
  return (
    <div id="partners" className={cls("my-16")}>
      <h1 className={cls("text-xl", "text-center", "mb-6")}>
        {TEXTS.WEBSITE_PAGE__HOME__PARTNERS__TITLE}
      </h1>
      <div
        className={cls(
          "mb-6",
          "max-w-4xl",
          "m-auto",
          "flex",
          "items-center",
          "justify-center",
          "flex-wrap"
        )}
      >
        {ITEMS.map(({ name, image }) => (
          <div key={name} className={cls("my-1", "mx-2")}>
            <Partner title={name} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
