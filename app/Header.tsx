"use client";
import Link from "next/link";
import { Shadows_Into_Light_Two } from "next/font/google";

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
});

const WEBSITE_TITLE = "To-Do App";

const Header = () => {
  return (
    <header className="shrink-0 border-b-2 bg-white text-neutral-600 shadow-2xl md:h-16">
      <div className="container flex h-full items-center justify-center py-2">
        <Link
          href={"/"}
          className={`${shadowsIntoLightTwo.className} select-none text-2xl font-semibold drop-shadow md:text-4xl`}
        >
          {WEBSITE_TITLE}
        </Link>
      </div>
    </header>
  );
};

export default Header;
