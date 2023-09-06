"use client";

import { handleError } from "@/store";
import { AnimatePresence, motion } from "framer-motion";

export default function Error() {
  //Check for errors
  const error = handleError();

  return (
    <div className="absolute w-full flex px-6 top-6">
      <AnimatePresence>
        {error.message != null && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="alert alert-error p-3 flex justify-between items-center pr-6 text-sm"
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error.message}</span>
            </div>
            <button className="font-bold" onClick={() => error.clear()}>
              OK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
