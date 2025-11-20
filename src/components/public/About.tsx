"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function About() {
  return (
    <section
      className="bg-[#F4FBF7] w-full py-6 md:py-10 px-4 overflow-hidden relative"
      id="about"
    >
      <div className="w-[85px] h-[800px] rotate-24 -translate-y-50 bg-[#E9F7EF] absolute left-[85%]"></div>
      <div className="w-[85px] h-[800px] rotate-24 -translate-y-50 bg-[#E9F7EF] absolute left-[95%]"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 items-center"
      >
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative w-[320px] md:w-[220px] h-[480px] aspect-square rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={assets.images.people1.src}
            alt="fruit"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right text section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-6 items-center md:items-start z-10"
        >
          <Button className="outline py-3 px-3 h-6 flex items-center justify-center">
            About Us
          </Button>
          <h1 className="text-[#002E12] text-3xl font-semibold text-center md:text-left">
            Get to Know Sumogo
          </h1>
          <p className="text-center md:text-left text-[#474747]">
            Sumogo Ltd is a holistic fresh, dried, and frozen food processing
            company dedicated to delivering Africa’s natural bounty to the
            world. We specialize in the sourcing, preservation, and export of
            fresh tropical fruits, dried and frozen fruits, spices, nuts, and
            culinary ingredients such as onions and ginger.
          </p>
          <Button
            varient="green"
            className="p-6 h-12 flex gap-2 items-center justify-center"
          >
            Our Mission{" "}
            <Image
              src={assets.icons.arrowDown}
              alt="arrow"
              width={20}
              height={20}
              className="object-fit"
            />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
