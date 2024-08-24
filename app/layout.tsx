import { Provider } from "@/context";
import classNames from "classnames";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { telegraf } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okra",
  description: "Okra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(telegraf.className)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
