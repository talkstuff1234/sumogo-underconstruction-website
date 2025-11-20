import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Discover() {
  return (
    <section className="bg-[#F4FBF7] w-full py-6 md:py-10 px-4">
      <div className="max-w-[1200] mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 relative w-[320px] md:w-[220px] h-[480px] aspect-square rounded-xl overflow-hidden shadow-md">
          <Image
            src={assets.images.fruit1.src}
            alt="fruit"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start">
          <Button varient="lightGreen">
            Proudly Nigerian. Globally loved.
          </Button>
          <h1 className="text-[#002E12] text-3xl font-semibold text-center md:text-left">
            Where freshness meets craftsmanship.
          </h1>
          <p className="text-center md:text-left">
            We partner with local farmers and process in our Idu, Abuja facility
            to deliver export-ready dried fruits that preserve the natural taste
            and nutrition of every harvest.
          </p>
          <Button varient="green">Discover Our Story</Button>
        </div>
      </div>
    </section>
  );
}

export default Discover;
