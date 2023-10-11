"use client";

import Image from "next/image";
import { useUserSession } from "@/store";
import { BiSolidCamera } from "react-icons/bi";
import Dropdown from "../dropdown/Dropdown";
import { useEffect, useState } from "react";
import EditAccount from "./EditAccount";
import logOut from "@/util/logOut";
import formatDate from "@/util/formatDate";

interface ThisType {
  setEditProfile: (val: any) => void;
}

export default function ProfileHeader({ setEditProfile }: ThisType) {
  //Import user session
  const user = useUserSession();

  //Full preview of image
  const [isImageOpen, setIsImageOpen] = useState(false);
  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  //Set edit account section
  const [editAccount, setEditAccount] = useState<boolean>(false);
  const [editAccountTitle, setEditAccountTitle] = useState<string>("");

  //Value of options
  const [optionName, setOptionName] = useState(user.name);
  const [value, setValue] = useState("");
  useEffect(() => {
    editAccountTitle === "Name" ? setOptionName(value) : null;
  }, [value]);

  //Handle click on name option
  const handleName = () => {
    setEditAccount(true);
    setEditAccountTitle("Name");
  };

  //Handle click on logout option
  const handleLogout = () => {
    logOut(user);
  };

  //Menu options
  const menuOptions = [
    { text: "Edit name", handleFunction: handleName },
    { text: "Sign out", handleFunction: handleLogout },
  ];

  return (
    <main className="flex bg-base-200 w-full pt-10 pb-8 px-6 text-neutral justify-between">
      <div className="flex items-center gap-2">
        <div className="border-solid border-[1px] border-primary w-16 h-16 p-2 rounded-full flex justify-center items-center">
          <Image
            className="w-full h-full rounded-full"
            src={user.avatar!}
            alt={user.name!}
            width={2000}
            height={2000}
            onClick={handleImageClick}
          />
          {isImageOpen && (
            <div
              className="fullscreen-image-overlay z-20"
              onClick={() => setIsImageOpen(false)}
            >
              <Image
                src={user.avatar!}
                alt={user.name!}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{optionName}</h1>
          <h1 className="text-sm font-light opacity-60">
            Joined on {formatDate(user.createdAt!)}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end cursor-pointer">
        <Dropdown options={menuOptions} />
        <div
          onClick={() => setEditProfile((prev: boolean) => !prev)}
          className="w-16 h-16 bg-primary rounded-full flex justify-center items-center translate-y-[4rem] text-base-100"
        >
          <BiSolidCamera className="w-8 h-8" />
        </div>
      </div>

      <EditAccount
        editAccountTitle={editAccountTitle}
        editAccount={editAccount}
        setEditAccount={setEditAccount}
        value={value}
        setValue={setValue}
      />
    </main>
  );
}
