"use client";

import DarkLight from "./DarkLight";

export default function Header() {
  return (
    <div className="text-3xl font-bold fixed top-0 left-0 w-full flex justify-between items-center pt-10 pb-4 px-6 bg-base-100 z-10">
      <h1 className="">MARVEL</h1>
      <div className="btn bg-transparent">
        <DarkLight />
      </div>
    </div>
  );
}
