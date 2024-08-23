import classNames from "classnames";
import type { Metadata } from "next";
import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
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
      <body className={classNames(telegraf.className, "font-extrabold")}>
        <ToastContainer position="top-center" />
        {children}
      </body>
    </html>
  );
}
