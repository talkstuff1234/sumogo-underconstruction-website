import React from "react";
import Button from "../ui/Button";
import ProductsShow from "./ProductsShow";

function Storefront() {
  return (
    <section className="bg-white py-10 flex flex-col items-center ">
      <div className="flex flex-col items-center gap-3">
        <div className="text-center gap-3 px-4 max-w-[1200px] mx-auto">
          <Button varient="lightGreen">
            Proudly Nigerian. Globally Loved.
          </Button>
          <h1 className="text-3xl font-semibold text-center">
            Wholesome <span className="text-[#036D2B]">Goodness</span> in Every
            Pack
          </h1>
          <p className="text-[#474747] text-center">
            Explore our delicious range of naturally dried fruits made for
            healthy snacking, baking, gifting, or export.
          </p>
        </div>
      </div>
      <ProductsShow />
      <Button varient="green">View All Products</Button>
    </section>
  );
}

export default Storefront;
