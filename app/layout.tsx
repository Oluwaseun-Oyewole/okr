import type { Metadata } from "next";
import { type ReactNode } from "react";
import { outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okra Assessments",
  description: "Okra Assessments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
