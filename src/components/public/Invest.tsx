"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function Invest() {
  return (
    <section className="bg-[#012D12] w-full py-6 md:py-10 px-4 overflow-hidden">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <h1 className="text-center text-white font-semibold text-3xl mb-3">
          Invest in Africa’s Agro-Future
        </h1>
        <p className="text-center text-white max-w-[80%] mx-auto">
          We invite investors to join us in scaling Africa’s fresh and processed
          food export story. With increasing global demand for healthy,
          naturally processed foods, Sumogo Ltd offers a unique opportunity to
          participate in a fast-growing and impactful industry.
        </p>
      </motion.div>

      {/* Main section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mt-10 mx-auto flex flex-col md:flex-row-reverse gap-10 items-center"
      >
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 relative w-[320px] md:w-[220px] h-[380px] aspect-square rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={assets.images.people4}
            alt="fruit"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text and list section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-3 items-center md:items-start"
        >
          <h1 className="text-white text-3xl font-semibold text-center md:text-left">
            Why Invest in Sumogo
          </h1>

          <div className="w-full flex flex-col mt-10 gap-3">
            {[
              {
                icon: assets.icons.factory,
                text: "Scalable production infrastructure",
              },
              {
                icon: assets.icons.maps,
                text: "Proven export track record",
              },
              {
                icon: assets.icons.vegeterian,
                text: "Expanding demand for African fresh and processed produce",
              },
              {
                icon: assets.icons.leaf,
                text: "Sustainable, inclusive value chain",
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
                className="p-2 rounded-3xl flex items-center gap-3 border bg-[#FCFCFC] border-[#EFEFF3] hover:scale-[1.03] hover:shadow-md transition-transform duration-300"
              >
                <Image
                  src={item.icon}
                  alt="alt"
                  width={50}
                  height={40}
                  className="p-3 rounded-full border border-[#EFEFF3] bg-white"
                />
                <p className="text-[#7A7A7A]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Invest;
