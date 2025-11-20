import FoodShow from "@/components/public/FoodShow";
import FreshFruits from "@/components/public/FreshFruits";
import Nuts from "@/components/public/Nuts";
import ProductHero from "@/components/public/ProductHero";
import Spices from "@/components/public/Spices";
import React from "react";

export default function Products() {
  return (
    <>
      <ProductHero />
      <FreshFruits />
      <FoodShow />
      <Spices />
      <Nuts />
    </>
  );
}
