import React from "react";
import Button from "../ui/Button";
import Testimony from "./Testimony";

function Testimonies() {
  return (
    <section className="bg-[#FAFAFA] py-10">
      <div className="mx-auto max-w-[1200px] text-center w-full">
        <Button varient="lightGreen">What Our Customeres Say.</Button>
        <h1 className="text-[#002E12] font-semibold text-3xl md:4xl">
          Real stories. Real flavor.
        </h1>
      </div>
      <Testimony />
      <div className="w-full text-center">
        <Button varient="green">View All Products</Button>
      </div>
    </section>
  );
}

export default Testimonies;
