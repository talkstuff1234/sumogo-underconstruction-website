import React from "react";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";

function Partner() {
  return (
    <section className="w-full p-8">
      <div
        className="max-w-[1200px] mx-auto relative overflow-hidden rounded-2xl px-5 py-10"
        style={{
          backgroundImage: `url(${assets.images.fruitsImage.src})`,
          backgroundSize: "cover",
          backgroundPositionX: "520px",
          backgroundPositionY: "-220px",
        }}
      >
        <div className="absolute inset-0 bg-[#012D12] opacity-70"></div>
        <div className="relative z-10 w-full md:w-[80&] lg:w-[50%] flex flex-col gap-6 items-start">
          <h1 className="text-2xl font-semibold md:text-3xl text-white">
            Supplying the World with Nigeria’s Finest
          </h1>
          <p className="text-white">
            Sumogo delivers premium dried fruits to retailers, distributors, and
            global partners offering consistent quality and trusted supply.
          </p>
          <Button className="outline-none py-3 px-3 h-12 flex items-center justify-center">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Partner;
