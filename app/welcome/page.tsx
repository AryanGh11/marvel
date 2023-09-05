"use client";

import { useBackgroundImages, useUserSession } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BackgroundChanger from "../components/BackgroundChanger";
import fetchData from "@/util/fetchData";
import Logo from "../components/Logo";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FirstSection from "../components/welcome/FirstSection";
import LastSection from "../components/welcome/LastSection";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Link from "next/link";

export default function Welcome() {
  useEffect(() => {
    if (backgroundImages.data !== null) {
      existingData();
    }
  }, []);

  //Check if user logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (userSession.isLogin) router.push("/");

  //Fetch backgrounds from server
  const [data, setData] = useState([]);
  const path = "/get-backgrounds";

  //Check if data existing in storage
  const backgroundImages = useBackgroundImages();
  const existingData = () => {
    if (backgroundImages.data !== null) {
      setData(backgroundImages.data!);
    }
  };

  //Check if data not existing in storage
  if (backgroundImages.data == null) {
    fetchData(path, setData, {});
    console.log(data);
  }

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

{
  /* <div className="fixed top-0 left-0 z-[2] w-full h-screen px-6 flex flex-col justify-between items-center py-10">
        <div className="pt-16">
          <Logo />
        </div>
        <div className="flex flex-col gap-12 w-full">
          <p className="font-light leading-12 px-3">
            Welcome to MARVEL univerce! <br></br> Please signup or login first
            to access
          </p>
        </div>
      </div> */
}
