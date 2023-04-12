import { useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import cls from "classnames";

import { AutoComplete } from "@pishroo/website-components";
import TEXTS from "@pishroo/texts";
import { url } from "@pishroo/utils";

import { PRODUCT_DETAILS_ROUTE } from "@website/constants";

import {
  GetProductsPublicArgsGql,
  GetProductsPublicSearchboxQuery,
  GetProductsPublicSearchboxQueryVariables,
} from "@website/gql/graphql";

import { GET_PRODUCTS_PUBLIC_SEARCHBOX } from "./gql";
import assets from "./assets";

export const ProductSearchbox: FC = () => {
  const router = useRouter();

  const [queryArgs, setQueryArgs] = useState<GetProductsPublicArgsGql>({
    search: "",
  });
  const [errorQuery, setErrorQuery] = useState("");

  const [items, setItems] = useState<
    GetProductsPublicSearchboxQuery["getProductsPublic"]["edges"]
  >([]);

  const { loading } = useQuery<
    GetProductsPublicSearchboxQuery,
    GetProductsPublicSearchboxQueryVariables
  >(GET_PRODUCTS_PUBLIC_SEARCHBOX, {
    variables: {
      getProductsPublicArgs: queryArgs,
    },
    onError: (error) => {
      setErrorQuery(error.message);
    },
    onCompleted: ({ getProductsPublic }) => {
      setItems(getProductsPublic?.edges);
    },
  });

  // const [filteredItem, setFilteredItem] = useState<Item[]>(items);
  const [selectedItem, setSelectedItem] = useState<typeof items[0]>();

  return (
    <div className={cls("flex", "items-center", "justify-center", "py-10")}>
      <div
        className={cls(
          "max-w-2xl",
          "flex-grow",
          "flex",
          "items-center",
          "justify-center"
        )}
      >
        <AutoComplete
          onChangeInput={(inputvalue) => {
            setQueryArgs({
              search: inputvalue,
            });
          }}
          renderItem={(item, isHighlighted) => {
            return (
              <div
                id={item.id}
                className={cls(
                  "flex",
                  "p-3",
                  "border",
                  "justify-center",
                  "items-center",
                  isHighlighted && "bg-gray-200"
                )}
              >
                <img
                  className={cls("w-16", "h-16", "block", "rounded-md")}
                  alt={item.slug}
                  src={
                    (item.fileUses &&
                      item.fileUses.length &&
                      process.env["NX_BACK_URL"] +
                        "/api/file/" +
                        item.fileUses[0].file.filename) ||
                    assets.images.placeholder.src
                  }
                />
                <div className={cls("p-3", "flex-grow")}>{item.name}</div>
              </div>
            );
          }}
          loading={loading}
          selectedItem={selectedItem}
          onSelectItem={(selectedItem) => {
            setSelectedItem(selectedItem);
            router.push(
              url.generate(PRODUCT_DETAILS_ROUTE, {
                slugProduct: selectedItem.slug,
              })
            );
          }}
          items={items}
          getValue={(item) => item.id}
          getLabel={(item) => item.name}
          onClick={() => ""}
          searchLabel={TEXTS.WEBSITE_PAGE__PRODUCT__DESCRIPTIOIN__SEARCH}
          placeholder={TEXTS.WEBSITE_PAGE__PRODUCT__SEARCHBOX__PLACEHOLDER}
        />
      </div>
    </div>
  );
};
