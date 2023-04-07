import { FC } from "react";
import { useRouter } from "next/router";
import cls from "classnames";
import { url } from "@pishroo/utils";
import { ProductCard, Filter, Pagination } from "@pishroo/website-components";
import { PROJECT_DETAILS_ROUTE } from "@website/constants";

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
  {
    image: "https://loremflickr.com/640/480/food",
    name: "Gorgeous Plastic Chips",
  },
  {
    image: "https://loremflickr.com/640/480/animals",
    name: "Electronic Bronze Car 9",
  },
  {
    image: "https://loremflickr.com/640/480/business",
    name: "Tasty Wooden Table 8",
  },
  {
    image: "https://loremflickr.com/640/480/people",
    name: "Unbranded Fresh Mouse 7",
  },
  {
    image: "https://loremflickr.com/640/480/city",
    name: "Awesome Rubber Mouse 6",
  },
  {
    image: "https://loremflickr.com/640/480/fashion",
    name: "Luxurious Steel Table 5",
  },
  {
    image: "https://loremflickr.com/640/480/nightlife",
    name: "Generic Fresh Tuna 4",
  },
  {
    image: "https://loremflickr.com/640/480/sports",
    name: "Incredible Frozen Tuna 3",
  },
  {
    image: "https://loremflickr.com/640/480/technics",
    name: "Unbranded Frozen Computer 2",
  },
  {
    image: "https://loremflickr.com/640/480/transport",
    name: "Electronic Fresh Gloves 1",
  },
];

export const Projects: FC = () => {
  const router = useRouter();

  return (
    <div className={cls("my-8")}>
      <div className={cls("mb-6", "max-w-4xl", "m-auto")}>
        <Filter
          items={[
            { label: "Frozen", selected: true, onClick: () => "" },
            { label: "Tuna", selected: false, onClick: () => "" },
            { label: "Electronic", selected: false, onClick: () => "" },
            { label: "Table", selected: false, onClick: () => "" },
            { label: "Computer", selected: false, onClick: () => "" },
            { label: "Fresh", selected: false, onClick: () => "" },
          ]}
        />
      </div>
      <div
        className={cls("flex", "justify-center", "items-center", "flex-wrap")}
      >
        {ITEMS.map((props) => (
          <div
            key={props.name}
            className={cls("my-4", "m-3", "w-full", "md:w-64")}
          >
            <ProductCard
              {...props}
              responsive
              onClick={() =>
                router.push(
                  url.generate(PROJECT_DETAILS_ROUTE, {
                    slugProduct: props.name,
                  })
                )
              }
            />
          </div>
        ))}
      </div>
      <div className={cls("inline-block", "flex", "justify-center", "my-4")}>
        <Pagination />
      </div>
    </div>
  );
};
