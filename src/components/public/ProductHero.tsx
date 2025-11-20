"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function ProductHero() {
  return (
    <section className="w-full bg-[#F4FBF7] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full px-6 py-16 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-center md:items-center gap-10"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Button className="outline py-1.5 px-3 h-6 flex items-center justify-center text-sm font-medium text-[#036D2B] border border-[#036D2B]/30">
            Our Products
          </Button>

          <h1 className="text-[#002E12] text-3xl md:text-4xl font-semibold mt-4 leading-snug">
            Leading Africa’s <span className="text-[#036D2B]">Agro-Export</span>{" "}
            Future
          </h1>

          <p className="text-[#4C4C4C] mt-3 max-w-[480px]">
            Our vision is to become Africa’s most trusted agro-export brand,
            driven by integrity, inclusivity, and innovation.
          </p>
        </motion.div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 w-full flex flex-col gap-4">
          {/* TOP IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={assets.images.food1.src}
              alt="Mangoes"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* BOTTOM IMAGES */}
          <div className="md:flex hidden gap-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true }}
              className="relative flex-1 h-[200px] rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={assets.images.food2.src}
                alt="Strawberries and oranges"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
              viewport={{ once: true }}
              className="relative flex-1 h-[200px] rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={assets.images.food3.src}
                alt="Pineapples"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProductHero;
