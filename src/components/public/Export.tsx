"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function Export() {
  return (
    <section className="w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] flex flex-col-reverse lg:flex-row-reverse gap-10 items-center mx-auto px-5 py-10"
      >
        {/* Left side - Export features */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h1 className="text-[#002E12] text-2xl md:text-3xl font-semibold">
            Our export capabilities include:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
            {[
              {
                icon: assets.icons.certificate,
                text: "Certified export licenses and regulatory approvals (NAFDAC, SON, NEPC)",
              },
              {
                icon: assets.icons.snow,
                text: "Cold chain logistics for fresh and frozen fruits",
              },
              {
                icon: assets.icons.boat,
                text: "Flexible shipping for bulk and containerized goods",
              },
              {
                icon: assets.icons.headphone,
                text: "Dedicated export and client support teams for seamless coordination",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="p-4 rounded-md border bg-[#FCFCFC] border-[#EFEFF3]"
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  width={50}
                  height={40}
                  className="p-3 rounded-full border border-[#EFEFF3] bg-white mb-2"
                />
                <p className="text-[#7A7A7A] text-sm md:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side - Text section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-5 items-center md:items-start"
        >
          <Button className="py-3 px-3 h-6 flex items-center justify-center">
            Export & Investor Relations
          </Button>
          <h1 className="text-[#002E12] text-3xl font-semibold text-center md:text-left">
            Licensed. Reliable. Global
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <p className="text-center md:text-left">
              Sumogo Ltd is a holistic fresh, dried, and frozen food processing
              company dedicated to delivering Africa’s natural bounty to the
              world. We specialize in the sourcing, preservation, and export of
              fresh tropical fruits, dried and frozen fruits, spices, nuts, and
              culinary ingredients such as onions and ginger.
            </p>
            <p className="text-center md:text-left">
              We maintain strict adherence to international standards and offer
              customized packaging and shipping for both fresh and processed
              produce.
            </p>
          </motion.div>
          <Button
            varient="green"
            className="py-3 px-3 h-12 flex items-center justify-center"
          >
            Our Mission{" "}
            <i className="bx text-white bx-arrow-down-stroke text-2xl"></i>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Export;
