"use client";
import Button from "@/components/custom/button";
import { navLists } from "@/utils/constants";
import { Routes } from "@/utils/routes";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const MobileNavigation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const variants = {
    hidden: { x: "100%", opacity: 0.3 },
    visible: {
      opacity: [0, 0.2, 0.6, 1],
      x: 0,
      transition: {
        type: "spring",
        mass: 0.45,
        stiffness: 80,
        damping: 10,
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const buttonContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const buttonItem = {
    hidden: { opacity: 0 },
    show: { opacity: [0, 0.2, 0, 8, 1] },
  };

  return (
    <motion.nav
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`container__wrapper absolute right-0 flex h-[88vh] w-full flex-col overflow-hidden bg-[#121212] shadow-md lg:hidden`}
    >
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="flex h-[48vh] w-full flex-col justify-center gap-5 text-sm font-light text-white"
      >
        {navLists?.map((nav) => {
          return (
            <motion.li key={nav.id} className="list-none" variants={item}>
              <Link href={nav.link}>{nav.title}</Link>
            </motion.li>
          );
        })}
      </motion.ul>
      <div className="mt-20 flex items-center justify-center border-t-[0.5px] border-gray-50">
        <motion.ul
          initial="hidden"
          animate="show"
          variants={buttonContainer}
          className="mt-10 flex w-[70%] flex-col justify-start gap-5 font-light"
        >
          <motion.li className="list-none" variants={buttonItem}>
            <Link href={Routes.join_waiting}>
              <Button buttonType="secondary">Join waitilist</Button>
            </Link>
          </motion.li>
          <motion.li className="list-none" variants={buttonItem}>
            <Link href={Routes.login}>
              <Button buttonType="secondary">Login</Button>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};
