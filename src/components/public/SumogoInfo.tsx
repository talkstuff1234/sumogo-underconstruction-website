import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { assets } from "@/assets/assets";

function SumogoInfo() {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] flex flex-col-reverse lg:flex-row gap-10 items-center mx-auto px-5 py-10">
        <div className="flex-1">
          <Button varient="lightGreen">Why Sumogo?</Button>
          <h1 className="text-[#002E12] text-2xl md:text-3xl font-semibold">
            Nature deserves the best care
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
            <div className="flex-1 p-4 rounded-lg border bg-[#FCFCFC] border-[#EFEFF3]">
              <Image
                src={assets.icons.ricebowl}
                alt="alt"
                width={50}
                height={40}
                className="p-3 rounded-full border border-[#EFEFF3] bg-white"
              />
              <h1 className="text-[#04939B]">Locally Sourced</h1>
              <p className="text-[#7A7A7A]">
                Directly from trusted Nigerian farmers.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-[#FCFCFC] border-[#EFEFF3]">
              <Image
                src={assets.icons.building}
                alt="alt"
                width={50}
                height={40}
                className="p-3 rounded-full border border-[#EFEFF3] bg-white"
              />
              <h1 className="text-[#70049B]">Modern Processing</h1>
              <p className="text-[#7A7A7A]">
                Advanced technology for premium quality.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-[#FCFCFC] border-[#EFEFF3]">
              <Image
                src={assets.icons.database}
                alt="alt"
                width={50}
                height={40}
                className="p-3 rounded-full border border-[#EFEFF3] bg-white"
              />
              <h1 className="text-[#9B8904]">Export-Ready</h1>
              <p className="text-[#7A7A7A]">Meeting international standards.</p>
            </div>
            <div className="p-4 rounded-lg border bg-[#FCFCFC] border-[#EFEFF3]">
              <Image
                src={assets.icons.favourite}
                alt="alt"
                width={50}
                height={40}
                className="p-3 rounded-full border border-[#EFEFF3] bg-white"
              />
              <h1 className="text-[#9B3E04]">No Additives</h1>
              <p className="text-[#7A7A7A]">Just fruit, sunshine, and love.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-[320px] md:w-[220px] h-[480px] aspect-square rounded-xl overflow-hidden shadow-md">
          <Image
            src={assets.images.person1.src}
            alt="fruit"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default SumogoInfo;
