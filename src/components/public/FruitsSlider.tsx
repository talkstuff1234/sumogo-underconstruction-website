"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

interface TransformData {
  scale: number;
  tilt: number;
  depth: number;
}

const FruitsSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState<TransformData[]>([]);
  const [scrollX, setScrollX] = useState(0);

  const speed = 2;

  const images = [
    assets.images.fruitOne,
    assets.images.fruitTwo,
    assets.images.fruitThree,
    assets.images.fruitFour,
    assets.images.fruitFive,
    assets.images.fruitSix,
  ];

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      if (!containerRef.current || !trackRef.current) {
        animationFrame = requestAnimationFrame(update);
        return;
      }

      const container = containerRef.current;
      const track = trackRef.current;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      // Move slider - infinite scroll
      let newX = scrollX - speed;
      const totalWidth = track.scrollWidth / 2;

      // Reset position when first set moves completely out of view
      if (-newX >= totalWidth) {
        newX += totalWidth;
      }
      setScrollX(newX);

      // Update transforms manually
      const itemElements = container.querySelectorAll(".item");
      const updated: TransformData[] = [];

      itemElements.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const distance = itemCenterX - centerX;
        const maxDistance = containerRect.width / 2;
        const normalized = distance / maxDistance;
        const absNorm = Math.abs(normalized);

        const minScale = 0.6;
        const maxScale = 1.5;
        const scale = minScale + absNorm * (maxScale - minScale);

        const maxTilt = 55;
        const tilt = -normalized * maxTilt;

        const maxDepth = -120;
        const depth = absNorm * maxDepth;

        updated.push({ scale, tilt, depth });
      });

      setTransforms(updated);

      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollX]);

  return (
    <div
      ref={containerRef}
      className="py-14 mx-auto flex gap-1 md:gap-5 w-[1650px] min-w-[400px] max-w-full"
      style={{
        overflow: "hidden",
        perspective: "1600px",
        position: "relative",
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-5"
        style={{
          transform: `translateX(${scrollX}px)`,
          transition: "transform 0s linear",
        }}
      >
        {duplicatedImages.map((img, index) => {
          const t = transforms[index];

          return (
            <div
              key={index}
              className="item relative rounded-2xl overflow-hidden  w-[130px] h-[170px]
             sm:w-[160px] sm:h-[210px]
             md:w-[200px] md:h-[250px]"
              style={{
                // width: "200px",
                // height: "250px",
                flexShrink: 0,
                transformStyle: "preserve-3d",
                transform: t
                  ? `translateZ(${t.depth}px) rotateY(${t.tilt}deg) scale(${t.scale})`
                  : "translateZ(0px) rotateY(0deg) scale(1)",
                transition: "transform 0.15s linear",
              }}
            >
              <Image
                src={img}
                alt={`fruit-${index}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FruitsSlider;
