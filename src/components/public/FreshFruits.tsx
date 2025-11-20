"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function FreshFruits() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto text-center"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#036D2B]"
        >
          Fresh Fruits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#4C4C4C] mt-3 max-w-[650px] mx-auto"
        >
          From lush tropical farms to global markets, our fresh fruit exports
          capture the authentic sweetness of Africa.
        </motion.p>

        <div className="mt-12">
          {/* TOP ROW */}
          <div className="flex flex-col gap-6 md:flex-row">
            {[assets.images.food5, assets.images.food6].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.15,
                }}
                viewport={{ once: true }}
                className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 flex p-3"
              >
                <div className="relative w-full h-[200px] rounded-md flex-1">
                  <Image
                    src={img}
                    alt="fruit"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="p-5 text-left flex-1">
                  <h3 className="text-[#141414] font-semibold text-lg">
                    {i === 0 ? "Pineapple" : "Mango"}
                  </h3>
                  <p className="text-[#7E7E7E] text-sm mt-1">
                    {i === 0
                      ? "Golden, juicy, and sun-ripened for exceptional flavor."
                      : "Premium Nigerian varieties known for rich aroma and taste."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GRID SECTION */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {[
              {
                img: assets.images.food4,
                title: "Papaya (Pawpaw)",
                desc: "Naturally sweet and packed with nutrients.",
              },
              {
                img: assets.images.food7,
                title: "Coconut",
                desc: "Fresh, tender coconuts for water, milk, or meat processing.",
              },
              {
                img: assets.images.food8,
                title: "Strawberry",
                desc: "Vibrant and handpicked at peak ripeness.",
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
                  <p className="text-[#7E7E7E] text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FreshFruits;
