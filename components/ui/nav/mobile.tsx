"use client";
import Button from "@/components/custom/button";
import { useCustomContext } from "@/hooks/useContext";
import { navLists } from "@/utils/constants";
import { Routes } from "@/utils/routes";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const MobileNavigation = () => {
  const { open } = useCustomContext();

  const variants = {
    hidden: { x: "100%", opacity: 0.3 },
    visible: {
      x: 0,
      transition: {
        type: "tween",
      },
      opacity: [0, 0.2, 0.6, 0.8, 1],
    },
    exit: { opacity: [1, 0.8, 0.5, 0.3, 0] },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
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
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate={"visible"}
          variants={variants}
          exit="exit"
          className={classNames(
            `container__wrapper fixed top-20 z-50 flex h-full w-full flex-col overflow-hidden overflow-y-hidden bg-[#121212] shadow-md lg:hidden`,
          )}
        >
          {open && (
            <motion.ul
              initial="hidden"
              animate="show"
              variants={container}
              className="flex h-[48vh] w-full flex-col justify-center gap-5 text-sm text-white"
            >
              {navLists?.map((nav) => {
                return (
                  <motion.li key={nav.id} className="list-none" variants={item}>
                    <Link href={nav.link}>{nav.title}</Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
          <div className="mt-20 flex items-center justify-center border-t-[0.5px] border-gray-50">
            {open && (
              <motion.ul
                initial="hidden"
                animate="show"
                variants={buttonContainer}
                className="mt-10 flex w-[70%] flex-col justify-start gap-5"
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
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
