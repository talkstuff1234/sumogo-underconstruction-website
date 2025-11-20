"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function Sustainability() {
  return (
    <section
      className="bg-[#F4FBF7] w-full py-6 md:py-10 px-4 overflow-hidden"
      id="products"
    >
      {/* Main container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 items-center"
      >
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 relative w-[320px] md:w-[220px] h-[480px] aspect-square rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={assets.images.person2}
            alt="fruit"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-3 items-center md:items-start"
        >
          <Button className="py-2 px-3.5">Sustainability & Quality</Button>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#002E12] text-3xl font-semibold text-center md:text-left"
          >
            Exporting More Than Products
          </motion.h1>

          <div className="flex flex-col gap-2">
            {[
              "We don’t just export products, we export trust and freshness. Every fruit, nut, or spice from Sumogo passes through rigorous quality control, energy-efficient processing, and ethical sourcing practices.",
              "Our facilities adhere to strict hygiene and safety standards, with continuous monitoring and testing to ensure compliance with export-grade certifications such as ISO, HACCP, and GlobalG.A.P..",
              "Our goal is to create shared value for our farmers, our partners, and our planet.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button varient="green" className="py-2 px-3.5">
              Our Mission{" "}
              <i className="bx text-white bx-arrow-down-stroke text-2xl"></i>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sustainability;
