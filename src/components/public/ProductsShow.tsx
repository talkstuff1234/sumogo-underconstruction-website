import React from "react";
import ProductShowItem from "./ProductShowItem";

function ProductsShow() {
  return (
    <div className="m-10 flex w-full mx-auto gap-2 overflow-x-auto scrollbar-hide">
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
      <ProductShowItem />
    </div>
  );
}

export default ProductsShow;
