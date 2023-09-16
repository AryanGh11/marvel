"use client";

import { useUserSession } from "@/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BackgroundChanger from "../components/BackgroundChanger";
import fetchData from "@/api/fetchData";
import Logo from "../components/Logo";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FirstSection from "../components/welcome/FirstSection";
import LastSection from "../components/welcome/LastSection";
import Link from "next/link";
import SecondaryButton from "../components/buttons/SecondaryButton";

export default function Welcome() {
  //Get all backgrounds from database
  const [data, setData] = useState([]);
  fetchData("/get-backgrounds", setData);

  //Check if user logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (userSession.isLogin) router.push("/");

  //Sections of welcome page
  const [section, setSection] = useState(1);

  return (
    <main className="w-full h-screen bg-base-100 overflow-hidden text-neutral">
      <div className="w-full h-screen flex flex-col justify-between items-center absolute top-0 left-0 z-[2] pt-48 px-6 pb-10">
        <Logo />

        {section == 1 && (
          <>
            <FirstSection />
            <div className="w-full" onClick={() => setSection(2)}>
              <PrimaryButton text="Continue" />
            </div>
          </>
        )}
        {section == 2 && (
          <>
            <LastSection />
            <div className="flex flex-col justify-center items-center w-full gap-4">
              <Link className="w-full" href={"/login"}>
                <PrimaryButton text="Log in" />
              </Link>
              <Link className="w-full" href={"/signup"}>
                <SecondaryButton text="Sign up" />
              </Link>
            </div>
          </>
        )}
      </div>
      <BackgroundChanger data={data} />
    </main>
  );
}
