import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Nuts() {
  return (
    <section className="w-full bg-white pb-10 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#002E12]">
          Nuts & Seeds
        </h2>
        <p className="text-[#474747] mt-3 max-w-[650px] mx-auto">
          From cashew nuts to sesame seeds, each batch is graded and packaged to
          meet global food safety and nutritional standards.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-10">
        <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
          <div className="relative w-full h-[250px] rounded-md flex-1">
            <Image
              src={assets.images.food10}
              alt="Pineapple"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="pt-3 text-left flex-1">
            <h3 className="text-[#141414] font-semibold text-lg">Cashew</h3>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
          <div className="relative w-full h-[250px] rounded-md flex-1">
            <Image
              src={assets.images.food11}
              alt="Pineapple"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="pt-3 text-left flex-1">
            <h3 className="text-[#141414] font-semibold text-lg">
              Sesame Seeds
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nuts;
