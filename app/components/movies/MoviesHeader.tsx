"use client";

import { useState } from "react";
import Input from "../inputs/Input";
import { AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import PrimaryButton from "../buttons/PrimaryButton";
import postData from "@/pages/api/postData";
import { handleMessage } from "@/store";

interface ThisType {
  value: string;
  setValue: (val: string) => void;
}

export default function MoviesHeader({ value, setValue }: ThisType) {
  //Set new movie suggest
  const [showSuggest, setShowSuggest] = useState<boolean>(false);

  //Values of new movie
  const [newMovie, setNewMovie] = useState("");
  const [newMovietrailer, setNewMovietrailer] = useState("");

  //Post new movie
  const data = {
    Title: newMovie,
    Trailer: newMovietrailer,
  };

  //Import success message
  const message = handleMessage();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const handleSubmit = () => {
    postData("/movie", undefined, options);

    //Show success message
    message.setMessage("Thank you for your suggest!");

    //Close section
    setShowSuggest(false);

    //Empty new movie value
    setNewMovie("");
  };

  return (
    <div className="flex fixed w-full bg-base-100 left-0 top-0 px-6 pb-4 pt-10">
      <Input
        id="search"
        placeholder="Search movies..."
        type="text"
        value={value}
        setValue={setValue}
      />
      <button
        onClick={() => setShowSuggest((prev) => !prev)}
        className="btn bg-transparent text-neutral z-10"
      >
        {showSuggest ? (
          <AiOutlinePlus className="w-5 h-5 rotate-45" />
        ) : (
          <AiOutlinePlus className="w-5 h-5" />
        )}
      </button>

      <AnimatePresence>
        {showSuggest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full h-screen px-6 top-0 left-0 flex flex-col gap-4 justify-center items-center bg-base-100 backdrop-blur-[1px]"
          >
            <Input
              id="search"
              placeholder="What movie do you want?"
              type="text"
              value={newMovie}
              setValue={setNewMovie}
            />
            <Input
              id="search"
              placeholder="Does it have a trailer?"
              type="text"
              value={newMovietrailer}
              setValue={setNewMovietrailer}
            />
            <div className="w-full" onClick={handleSubmit}>
              <PrimaryButton
                text="Submit"
                disabled={newMovie === "" ? true : false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
