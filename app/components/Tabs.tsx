"use client";

interface ThisType {
  section: string;
  setSection: (val: string) => void;
}

export function MainTabs({ section, setSection }: ThisType) {
  return (
    <div className="w-full">
      <ul className="flex w-full justify-start gap-6 items-center text-neutral font-semibold">
        <li
          onClick={() => setSection("cast")}
          className={`${
            section === "cast"
              ? "opacity-100 bg-base-200 px-4 py-1 rounded-lg"
              : "opacity-40 py-1"
          }`}
        >
          Cast
        </li>
        <li
          onClick={() => setSection("story")}
          className={`${
            section === "story"
              ? "opacity-100 bg-base-200 px-4 py-1 rounded-lg"
              : "opacity-40 py-1"
          }`}
        >
          Story
        </li>
        <li
          onClick={() => setSection("about")}
          className={`${
            section === "about"
              ? "opacity-100 bg-base-200 px-4 py-1 rounded-lg"
              : "opacity-40 py-1"
          }`}
        >
          About
        </li>
        <li
          onClick={() => setSection("download")}
          className={`${
            section === "download"
              ? "opacity-100 bg-base-200 px-4 py-1 rounded-lg"
              : "opacity-40 py-1"
          }`}
        >
          Download
        </li>
      </ul>
    </div>
  );
}
