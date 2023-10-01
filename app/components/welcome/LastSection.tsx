"use client";

import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";

interface ThisType {
  setSection: (val: number) => void;
}

export default function LastSection({ setSection }: ThisType) {
  return (
    <>
      <motion.div
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setSection(1)}
        className="absolute left-6 top-12 text-white"
      >
        <IoIosArrowBack className="w-8 h-8" />
      </motion.div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="z-20 text-center leading-8 font-semibold text-xl text-white"
      >
        <h1>Please sign up or log in first to access this app</h1>
      </motion.div>
    </>
  );
}
