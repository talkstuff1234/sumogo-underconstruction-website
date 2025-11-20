import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function ProductShowItem() {
  return (
    <div className="bg-white border border-[#E8E8E8] p-4 rounded-lg">
      <div className="relative w-[220px]  aspect-square rounded-xl overflow-hidden shadow-md">
        <Image
          src={assets.images.product1.src}
          alt="fruit"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <span className="text-[#7E7E7E]">$0.00</span>
        <h1 className="text-[#141414]">Dried Coconut</h1>
        <span className="text-[#049B3D] underline">Buy Now</span>
      </div>
    </div>
  );
}

export default ProductShowItem;
