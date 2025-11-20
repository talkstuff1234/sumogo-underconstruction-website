"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ngozi",
    role: "Trade Partner",
    rating: 4,
    text: "The best dried fruits I’ve ever had—fresh, flavorful, and full of natural sweetness. You can taste the quality in every bite.",
  },
  {
    id: 2,
    name: "Ngozi",
    role: "Trade Partner",
    rating: 3,
    text: "The best dried fruits I’ve ever had—fresh, flavorful, and full of natural sweetness. You can taste the quality in every bite.",
  },
  {
    id: 3,
    name: "Ngozi",
    role: "Trade Partner",
    rating: 2,
    text: "The best dried fruits I’ve ever had—fresh, flavorful, and full of natural sweetness. You can taste the quality in every bite.",
  },
  {
    id: 4,
    name: "Ngozi",
    role: "Trade Partner",
    rating: 5,
    text: "The best dried fruits I’ve ever had—fresh, flavorful, and full of natural sweetness. You can taste the quality in every bite.",
  },
  {
    id: 5,
    name: "Ngozi",
    role: "Trade Partner",
    rating: 4,
    text: "The best dried fruits I’ve ever had—fresh, flavorful, and full of natural sweetness. You can taste the quality in every bite.",
  },
];

function Testimony() {
  // Duplicate the array so it loops seamlessly
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* First Row (left to right) */}
      <div className="flex animate-scroll gap-6 mb-6">
        {loopedTestimonials.map((t) => (
          <div
            key={`row1-${t.id}-${Math.random()}`}
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] rounded-xl border border-gray-200 shadow-sm p-6 bg-white flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div className="flex mb-4">
              <Image
                src={assets.icons.stars}
                alt="stars"
                width={64}
                height={64}
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {t.text}
            </p>
            <div className="flex justify-between flex-row-reverse items-center gap-3 mt-auto">
              {t.avatar ? (
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                  {t.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row (right to left) */}
      <div className="flex animate-scroll-reverse gap-6">
        {loopedTestimonials.map((t) => (
          <div
            key={`row2-${t.id}-${Math.random()}`}
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] rounded-xl border border-gray-200 shadow-sm p-6 bg-white flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div className="flex mb-4">
              <Image
                src={assets.icons.stars}
                alt="stars"
                width={64}
                height={64}
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {t.text}
            </p>
            <div className="flex justify-between flex-row-reverse items-center gap-3 mt-auto">
              {t.avatar ? (
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                  {t.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimony;
