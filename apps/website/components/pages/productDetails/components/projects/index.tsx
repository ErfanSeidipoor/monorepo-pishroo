import { FC } from "react";
import { useRouter } from "next/router";
import cls from "classnames";
import { ProductCard, Slider } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";
import { PROJECT_DETAILS_ROUTE } from "@website/constants";
import { GetProductByIdPublicProductPageQuery } from "@website/gql/graphql";

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

export const Projects: FC<{
  data: GetProductByIdPublicProductPageQuery;
}> = () => {
  const router = useRouter();

  return (
    <div className={cls("my-8")}>
      <h1 className={cls("text-xl", "text-center", "mb-6", "text-right")}>
        {TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__PROJECTS__TITLE}
      </h1>
      <Slider
        items={ITEMS.map((props) => ({
          node: (
            <div key={props.name} className={cls("my-4", "mr-3")}>
              <ProductCard
                {...props}
                responsive={false}
                onClick={() =>
                  router.push(
                    url.generate(PROJECT_DETAILS_ROUTE, {
                      slugProduct: props.name,
                    })
                  )
                }
              />
            </div>
          ),
          key: props.name,
          width: 266,
        }))}
      />
    </div>
  );
};
