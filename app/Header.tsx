"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shadows_Into_Light_Two } from "next/font/google";

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  weight: ["400"],
});

type navLinks = {
  label: string;
  href: string;
}[];

const websiteTitle = "To-Do App";
const navLinks: navLinks = [
  {
    label: "To-dos",
    href: "/",
  },
  {
    label: "Pomodoro",
    href: "/pomodoro",
  },
];

const Header = () => {
  return (
    <header className="shrink-0 border-b-2 bg-white text-neutral-600 shadow-2xl md:h-16">
      <div className="container flex h-full items-center justify-center py-2">
        <Link
          href={"/"}
          className={`${shadowsIntoLightTwo.className} select-none text-2xl font-semibold drop-shadow md:text-4xl`}
        >
          {websiteTitle}
        </Link>
      </div>
    </header>
  );
};

export default Header;
