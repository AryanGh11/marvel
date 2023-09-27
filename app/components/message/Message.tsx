"use client";

import { handleMessage } from "@/store";
import { AnimatePresence, motion } from "framer-motion";

export default function Message() {
  //Check for message
  const message = handleMessage();

  //Hide after 5s
  setTimeout(() => {
    message.clear();
  }, 5000);

  return (
    <div className="absolute w-full flex px-6 top-6 z-20">
      <AnimatePresence>
        {message.message != null && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="alert alert-success p-3 flex justify-between items-center pr-6 text-sm"
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{message.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
