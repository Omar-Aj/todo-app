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
    <header className="border-b border-neutral-600 bg-white text-neutral-600 md:h-16">
      <div className="container flex h-full flex-col items-center justify-between space-y-2 py-2 md:flex-row md:space-y-0">
        <Link
          href={"/"}
          className={`${shadowsIntoLightTwo.className} select-none text-2xl font-semibold md:text-4xl`}
        >
          {websiteTitle}
        </Link>
        <nav>
          <ul className="flex justify-end space-x-4">
            {navLinks.map((navLink) => (
              <li
                key={navLink.href}
                className={`flex select-none items-center justify-center rounded-lg bg-neutral-200 font-semibold md:text-lg ${pathname === navLink.href ? activeLinkStyle : ""}`}
              >
                <Link className="px-4 md:px-8" href={navLink.href}>
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
