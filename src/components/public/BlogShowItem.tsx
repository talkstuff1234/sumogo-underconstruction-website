import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

function BlogShowItem() {
  return (
    <div className="border border-[#E8E8E8]  flex flex-col gap-2 rounded-lg p-4">
      <div className="relative object-cover w-full aspect-[16/9] rounded-xl overflow-hidden">
        <Image
          src={assets.images.tractor.src}
          alt="tractor"
          fill
          className="object-cover"
        />
      </div>

      <div className="">
        <div className="flex items-center">
          <Image
            src={assets.icons.calendar.src}
            alt="calendar"
            width={20}
            height={20}
          />
          <span className="block text-[#7E7E7E]">10 Aug 2023</span>
        </div>
        <h1 className="text-[#141414] font-semibold">Cultivating Synergies</h1>
        <p className="text-[#7E7E7E]">
          Fostering Global Partnerships for Agro-Processing Excellence
        </p>
        <div className="underline text-[#049B3D]">Read More</div>
      </div>
    </div>
  );
}

export default BlogShowItem;
