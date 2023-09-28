"use client";

import fetchData from "@/pages/api/fetchData";
import { AvatarType } from "@/types/AvatarType";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Avatar from "../Avatar";
import postData from "@/pages/api/postData";
import { useUserSession } from "@/store";

interface ThisType {
  editProfile: boolean;
}

export default function EditAvatar({ editProfile }: ThisType) {
  //Import user session
  const email = useUserSession().email;

  //Selected avatar
  const [selAvatar, setSelAvatar] = useState<string | null>(null);

  //Fetch all avatar from database
  const [avatar, setAvatar] = useState<AvatarType[]>([]);
  fetchData("/avatar", setAvatar);

  //Edit current avatar
  const data = {
    avatar: selAvatar,
    email: email,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  //Change avatar
  if (selAvatar != null) {
    postData("/update-user", undefined, options);

    //Refresh page after 1s
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <AnimatePresence>
      {editProfile && (
        <motion.div
          initial={{ translateY: 600 }}
          animate={{ translateY: 0 }}
          transition={{ translateY: 0, duration: 0.5 }}
          exit={{ translateY: 600 }}
          className="w-full fixed bg-base-200 bottom-0 py-10 px-16 z-20 rounded-se-[2.5rem] rounded-ss-[2.5rem] grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-4"
        >
          {avatar.map((a) => (
            <div onClick={() => setSelAvatar(a.url)}>
              <Avatar title={a.title} url={a.url} />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
