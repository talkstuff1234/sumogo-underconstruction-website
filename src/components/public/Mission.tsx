"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function Mission() {
  return (
    <section className="w-full py-6 md:py-10 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse gap-10 items-center"
      >
        {/* Right image (reversed layout) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative w-[320px] md:w-[220px] h-[480px] aspect-square rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={assets.images.people2.src}
            alt="fruit"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Left text section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-5 items-center md:items-start"
        >
          <Button className="py-3 px-3 h-6 flex items-center justify-center bg-[#0066271A]">
            Our Mission
          </Button>
          <h1 className="text-[#002E12] text-3xl font-semibold text-center md:text-left">
            Sustainability. <span className="text-[#036D2B]">Innovation.</span>{" "}
            Reliability
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="text-center md:text-left">
              Our mission is to redefine Nigeria’s agricultural exports through
              innovation, reliability, and sustainable practices. By integrating
              modern cold-chain technology with traditional agricultural
              expertise, we deliver consistent quality at scale. We partner with
              farmers and cooperatives across Nigeria, ensuring traceable
              sourcing and fair value distribution throughout the supply chain.
            </p>
            <p className="text-center md:text-left">
              We believe that every harvest from Africa deserves a global
              audience and every farmer deserves a fair reward.
            </p>
          </motion.div>
          <Button
            varient="green"
            className="p-6 h-12 flex gap-2 items-center justify-center"
          >
            Our Vision{" "}
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

export default Mission;
