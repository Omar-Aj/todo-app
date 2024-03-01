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
const activeLinkStyle = `border-2 border-dashed border-neutral-600`;

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b border-neutral-600 bg-white text-neutral-600">
      <div className="container flex h-full items-center justify-between">
        <Link
          href={"/"}
          className={`${shadowsIntoLightTwo.className} select-none text-4xl font-semibold`}
        >
          {websiteTitle}
        </Link>
        <nav>
          <ul className="flex justify-end space-x-8">
            {navLinks.map((navLink) => (
              <li
                key={navLink.href}
                className={`flex h-8 select-none items-center justify-center overflow-hidden rounded-lg bg-neutral-200 text-lg font-semibold ${pathname === navLink.href ? activeLinkStyle : ""}`}
              >
                <Link className="px-8" href={navLink.href}>
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
