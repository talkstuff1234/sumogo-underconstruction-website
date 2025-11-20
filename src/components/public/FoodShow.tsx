import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const fruits = [
  {
    fruit: assets.images.fruitOne,
    name: "Coconut",
  },
  {
    fruit: assets.images.fruitTwo,
    name: "Banana",
  },
  {
    fruit: assets.images.fruitThree,
    name: "Papaya",
  },
  {
    fruit: assets.images.fruitFour,
    name: "Strawberry",
  },
  {
    fruit: assets.images.fruitFive,
    name: "Mango",
  },
  {
    fruit: assets.images.fruitSix,
    name: "Pineapple",
  },
];

function FoodShow() {
  return (
    <section className="w-full">
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-[#036D2B]">
          Fresh Fruits
        </h2>
        <p className="text-[#4C4C4C] mt-3 max-w-[650px] mx-auto text-center">
          From lush tropical farms to global markets, our fresh fruit exports
          capture the authentic sweetness of Africa.
        </p>
      </div>
      <div className="m-10 flex w-full mx-auto gap-2 overflow-x-auto scrollbar-hide">
        {fruits.map((fruit, i) => (
          <div
            key={i}
            className="bg-white border border-[#E8E8E8] p-4 rounded-lg"
          >
            <div className="relative w-[220px] h-[250px]  aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src={fruit.fruit}
                alt="fruit"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-[#141414] mt-3 font-semibold">{fruit.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodShow;
