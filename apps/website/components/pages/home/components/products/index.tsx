import { FC } from "react";
import cls from "classnames";
import { ProductCard, Slider, Filter } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";

const ITEMS = [
  {
    image: "https://loremflickr.com/640/480/food",
    name: "Gorgeous Plastic Chips",
  },
  {
    image: "https://loremflickr.com/640/480/animals",
    name: "Electronic Bronze Car",
  },
  {
    image: "https://loremflickr.com/640/480/business",
    name: "Tasty Wooden Table",
  },
  {
    image: "https://loremflickr.com/640/480/people",
    name: "Unbranded Fresh Mouse",
  },
  {
    image: "https://loremflickr.com/640/480/city",
    name: "Awesome Rubber Mouse",
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
    name: "Incredible Frozen Tuna",
  },
  {
    image: "https://loremflickr.com/640/480/technics",
    name: "Unbranded Frozen Computer",
  },
  {
    image: "https://loremflickr.com/640/480/transport",
    name: "Electronic Fresh Gloves",
  },
];

export const Products: FC = () => {
  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6")}>
        {TEXTS.WEBSITE_PAGE__HOME__PRODUCTS__TITLE}
      </h1>
      <div className={cls("mb-6", "max-w-2xl", "m-auto")}>
        <Filter
          items={[
            { label: "Plastic", selected: true, onClick: () => "" },
            { label: "Electronic", selected: false, onClick: () => "" },
            { label: "Fresh", selected: false, onClick: () => "" },
            { label: "Incredible", selected: false, onClick: () => "" },
            { label: "Luxurious", selected: false, onClick: () => "" },
            { label: "Rubber", selected: false, onClick: () => "" },
          ]}
        />
      </div>
      <Slider
        items={ITEMS.map((props) => ({
          node: (
            <div key={props.name} className={cls("my-4")}>
              <ProductCard {...props} />
            </div>
          ),
          key: props.name,
          width: 340,
        }))}
      />
    </div>
  );
};
