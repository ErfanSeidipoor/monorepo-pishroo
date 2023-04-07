import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ProductDetailsPage } from "@website/components/pages/productDetails";

export function Product() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Product Details");
    setPageTitle(TEXTS.WEBSITE_PAGE__PRODUCT_DETAILS__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ProductDetailsPage />;
}

export default Product;
