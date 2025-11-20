"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function Spices() {
  return (
    <section className="w-full bg-white pb-10 px-6 md:px-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto text-center"
      >
        {/* TOP SECTION */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h1 className="text-[#002E12] text-3xl md:text-4xl font-semibold mt-4 leading-snug">
              Spices & Culinary
              <span className="text-[#036D2B]"> Ingredients</span>
            </h1>

            <p className="text-[#4C4C4C] mt-3 max-w-[480px]">
              Our vision is to become Africa’s most trusted agro-export brand,
              driven by integrity, inclusivity, and innovation.
            </p>
          </motion.div>

          {/* RIGHT FEATURED IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] flex-1 w-full rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3"
          >
            <div className="relative w-full h-[250px] rounded-md">
              <Image
                src={assets.images.food12}
                alt="Onions"
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="pt-3 text-left flex-1">
              <h3 className="text-[#141414] font-semibold text-lg">Onions</h3>
            </div>
          </motion.div>
        </div>

        {/* GRID SECTION */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {[
            {
              img: assets.images.food13,
              title: "Ginger",
            },
            {
              img: assets.images.food14,
              title: "Tumeric",
            },
            {
              img: assets.images.food15,
              title: "Pepper varieties",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: "easeOut",
                delay: 0.25 + i * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3"
            >
              <div className="relative w-full h-[200px] rounded-md flex-1">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="pt-3 text-left flex-1">
                <h3 className="text-[#141414] font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Spices;
