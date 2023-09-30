"use client";

import { useUserSession } from "@/store";
import OptionButton from "../buttons/OptionButton";
import { useEffect, useState } from "react";
import EditAccount from "./EditAccount";

export default function ProfileAccount() {
  //Import user session
  const userSession = useUserSession();

  //Value of options
  const [optionUsername, setOptionUsername] = useState(userSession.username);
  const [optionPhone, setOptionPhone] = useState(userSession.phone_number);
  const [optionBio, setOptionBio] = useState(userSession.bio);

  const [value, setValue] = useState("");
  useEffect(() => {
    editAccountTitle === "Username"
      ? setOptionUsername(value)
      : editAccountTitle === "Bio"
      ? setOptionBio(value)
      : editAccountTitle === "Phone number"
      ? setOptionPhone(value)
      : null;
  }, [value]);

  //Acount options
  const options = [
    {
      name: "Phone number",
      text: optionPhone != "" ? optionPhone : "Not set",
      description: "Tap to change phone number",
    },
    {
      name: "Username",
      text: "@" + optionUsername,
      description: "Username",
    },
    { name: "Bio", text: optionBio, description: "Bio" },
  ];

  //Set edit account section
  const [editAccount, setEditAccount] = useState<boolean>(false);
  const [editAccountTitle, setEditAccountTitle] = useState<string>("");

  //Handle click on option function
  const handleOption = (option: { name: string | null }) => {
    setEditAccount(true);
    setEditAccountTitle(option.name!);
  };

  return (
    <main className="flex flex-col w-full pt-8 px-6 text-neutral justify-between gap-4">
      <h1 className="text-primary">Account</h1>
      {options.map((option) => (
        <div onClick={() => handleOption(option)}>
          <OptionButton text={option.text!} description={option.description} />
        </div>
      ))}
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
