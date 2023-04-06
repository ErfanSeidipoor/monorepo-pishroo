import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ProductPage } from "@website/components/pages/product";

export function Product() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Product");
    setPageTitle(TEXTS.WEBSITE_PAGE__PRODUCT__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ProductPage />;
}

export default Product;
