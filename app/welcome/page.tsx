"use client";

import { useBackgroundImages, useUserSession } from "@/store";
import { Style } from "@/util/style";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BackgroundChanger from "../components/BackgroundChanger";
import fetchData from "@/util/fetchData";
import Logo from "../components/Logo";
import PrimaryButton from "../components/PrimaryButton";

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
  const path = "/movies";

  //Check if data existing in storage
  const backgroundImages = useBackgroundImages();
  const existingData = () => {
    if (backgroundImages.data !== null) {
      setData(backgroundImages.data!);
    }
  };
  fetchData(path, setData);
  return (
    <main className={Style.welcome}>
      <BackgroundChanger data={data} />
      <div className="fixed top-0 left-0 z-[2] w-full h-screen px-6 flex flex-col justify-between items-center py-10">
        <div className="pt-16">
          <Logo />
        </div>
        <div className="flex flex-col gap-12 w-full">
          <p className="font-light leading-12 px-3">
            Welcome to MARVEL univerce! <br></br> Please signup or login first
            to access
          </p>
          <PrimaryButton text="Continue" />
        </div>
      </div>
    </main>
  );
}
