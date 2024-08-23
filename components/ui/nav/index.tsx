"use client";
import logoImage from "@/assets/svg/logo.svg";
import Button from "@/components/custom/button";
import { useScroll } from "@/hooks/useScroll";
import { navLists } from "@/utils/constants";
import { Routes } from "@/utils/routes";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileNavigation } from "./mobile";

const Navigation = () => {
  const { isScrolledPast } = useScroll();
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<HTMLInputElement | any>();
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header
      className={classNames(
        "sticky left-0 top-0 z-50 h-[12vh] bg-white font-telegraf font-medium transition-all duration-500 ease-in-out",
        { "bg-gray-100": isScrolledPast },
      )}
    >
      <nav className="container__wrapper flex h-full items-center justify-between">
        <Link href={Routes.home} className="text-lg text-white">
          <Image
            src={logoImage}
            alt="Okra logo image"
            className="h-full md:w-[150px]"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLists?.map((nav) => {
            return (
              <li
                key={nav.id}
                className="text-sm text-textColor transition-all duration-500 ease-in-out hover:text-green-500 xl:text-base"
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href={Routes.login}>
            <Button className="" buttonType="default">
              Login
            </Button>
          </Link>
          <Link href={Routes.join_waiting}>
            <Button buttonType="secondary">Join waitlist</Button>
          </Link>
        </div>

        <div className="lg:hidden" role="button" tabIndex={0} onClick={toggle}>
          {!open ? (
            <div ref={ref} role="button" tabIndex={0}>
              <RxHamburgerMenu color="#333" size={25} />
            </div>
          ) : (
            <IoMdClose color="#333" size={25} role="button" />
          )}
        </div>
      </nav>
      {open && <MobileNavigation />}
    </header>
  );
};

export default Navigation;
