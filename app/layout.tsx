import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { Toaster } from "@/components/ui/toaster";

const notoSans = Noto_Sans({ subsets: ["latin"] });

const WEBSITE_TITLE = "To-Do App";
const WEBSITE_DESCRIPTION = "Keep track of your daily tasks with ease!";

export const metadata: Metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} flex h-dvh flex-col`}>
        <Header />
        <main className="flex-grow overflow-auto bg-neutral-100">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
