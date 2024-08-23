import docImage from "@/assets/svg/docs.svg";
import LinkedIn from "@/assets/svg/linked.svg";
import Slack from "@/assets/svg/slack.svg";
import supportImage from "@/assets/svg/support.svg";
import X from "@/assets/svg/twitter.svg";
import Youtube from "@/assets/svg/youtube.svg";
import { Routes } from "./routes";

interface NavInterface {
  id: number;
  title: string;
  link: string;
}

export const navLists: Readonly<NavInterface[]> = [
  { id: 0, title: "Products", link: Routes.products },
  { id: 1, title: "Customers", link: Routes.customers },
  { id: 2, title: "Docs", link: Routes.docs },
  { id: 3, title: "Our Story", link: Routes.our_story },
  { id: 4, title: "Pricing", link: Routes.pricing },
  { id: 5, title: "Contacts", link: Routes.contacts },
];

export const resources = [
  {
    id: 0,
    title: "See Brinte docs",
    link: "/",
    heading: "Brinte Docs",
    imagePath: docImage,
    className: "card-1",
    color: "#D2BCFF",
  },
  {
    id: 1,
    title: "Join slack community",
    link: "/",
    heading: "Brinte Community",
    imagePath: Slack,
    className: "card-2",
    color: "#FFB693",
  },
  {
    id: 2,
    title: "Go to help center",
    link: "/",
    heading: "Brinte support",
    imagePath: supportImage,
    className: "card-3",
    color: "#FFF",
  },
];

export const footerArray = [
  {
    id: 0,
    links: [
      { title: "Product", id: 0, image: "" },
      { id: 1, title: "Customers", image: "" },
      { id: 2, title: "Docs", image: "" },
      { id: 3, title: "Our story", image: "" },
      { id: 4, title: "Pricing", image: "" },
    ],
    title: "RESOURCES",
  },

  {
    id: 1,
    links: [
      { title: "LinkedIn", id: 0, image: LinkedIn },
      { id: 1, title: "X", image: X },
      { id: 2, title: "Youtube", image: Youtube },
      { id: 3, title: "Slack", image: Slack },
    ],
    title: "CONNECT WITH US",
  },

  {
    id: 2,
    links: [
      { title: "Terms", id: 0, image: "" },
      { id: 1, title: "Privacy", image: "" },
    ],
    title: "LEGAL",
  },
];
