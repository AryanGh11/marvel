"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import Input from "../inputs/Input";
import { useUserSession } from "@/store";
import postData from "@/pages/api/postData";

interface ThisType {
  editAccount: boolean;
  setEditAccount: (val: boolean) => void;
  editAccountTitle: string;
  value: string;
  setValue: (val: string) => void;
}

export default function EditAccount({
  editAccount,
  setEditAccount,
  editAccountTitle,
  value,
  setValue,
}: ThisType) {
  //Set values
  const [section, setSection] = useState("");

  useEffect(() => {
    setSection(
      editAccountTitle === "Username"
        ? "Username"
        : editAccountTitle === "Phone number"
        ? "Phone number"
        : editAccountTitle === "Bio"
        ? "Bio"
        : ""
    );
    setId(
      section === "Username"
        ? "username"
        : section === "Phone number"
        ? "phone number"
        : section === "Bio"
        ? "bio"
        : ""
    );
  }, [editAccountTitle, section]);

  //Import user session
  const user = useUserSession();

  //Set input fields
  const [id, setId] = useState("");
  const type = section === "Phone number" ? "number" : "text";

  //Handle user info for update
  const handleUpdate = () => {
    const phoneData = {
      email: user.email,
      phone_number: value,
    };
    const usernameData = {
      email: user.email,
      username: value,
    };
    const bioData = {
      email: user.email,
      bio: value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        section === "Username"
          ? usernameData
          : section === "Phone number"
          ? phoneData
          : section === "Bio"
          ? bioData
          : null
      ),
    };
    postData("/update-user", undefined, options);
    setEditAccount(false);
  };

  return (
    <AnimatePresence>
      {editAccount && (
        <motion.main
          initial={{ translateX: 500 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ translateX: 500 }}
          className="w-full h-screen fixed top-0 right-0 bg-base-100 z-20"
        >
          {/* Header */}
          <div className="w-full bg-base-200 pt-6 px-6 pb-4 flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div onClick={() => setEditAccount(false)}>
                <IoIosArrowForward className="w-6 h-6 rotate-180" />
              </div>
              <h1 className="text-lg font-bold">{editAccountTitle}</h1>
            </div>
            {value != "" && (
              <div onClick={handleUpdate}>
                <MdOutlineDone className="w-6 h-6" />
              </div>
            )}
          </div>

          {/* Body */}
          <div className="w-full flex pt-6 px-6 flex-col justify-center items-start gap-3">
            <label htmlFor={id} className="text-primary">
              Set {editAccountTitle.toLowerCase()}
            </label>
            <Input
              id={id}
              placeholder="Type here..."
              type={type}
              setValue={setValue}
            />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
