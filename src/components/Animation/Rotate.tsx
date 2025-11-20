"use client";

import * as motion from "motion/react-client";
import React from "react";

export default function Rotate() {
  return (
    <motion.div
      className="p-20 w-[500px] h-[500px] bg-red-500 text-white font-semibold flex items-center justify-center mx-auto"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      Rotate
    </motion.div>
  );
}
