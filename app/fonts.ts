import localFont from "next/font/local";

export const telegraf = localFont({
  src: [
    {
      path: "../public/fonts/Telegraf/PPTelegraf-UltraLight.otf",
    },
    {
      path: "../public/fonts/Telegraf/PPTelegraf-UltraBold.otf",
    },
    {
      path: "../public/fonts/Telegraf/PPTelegraf-Regular.otf",
    },
  ],
  variable: "--font-telegraph",
});
