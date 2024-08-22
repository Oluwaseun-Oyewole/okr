import { DM_Sans, Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "500", "600", "700"],
});

export const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["500"],
});
