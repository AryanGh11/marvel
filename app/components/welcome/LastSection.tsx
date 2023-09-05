"use client";

import { motion } from "framer-motion";

export default function LastSection() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-20 text-center leading-8 font-semibold text-xl"
    >
      <h1>Please sign up or log in first to access this app</h1>
    </motion.div>
  );
}
