"use client";

import { motion } from "framer-motion";

export default function FirstSection() {
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="z-20 text-center leading-8 font-bold text-2xl"
    >
      <h1 className="flex flex-wrap items-center justify-center gap-2">
        Welcome to{" "}
        <span className="text-3xl flex p-1 bg-primary">MARVEL WORLD</span>{" "}
      </h1>
    </motion.div>
  );
}
