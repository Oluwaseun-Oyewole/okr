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
