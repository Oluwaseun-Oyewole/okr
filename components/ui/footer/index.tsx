/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";
import Brinte from "@/assets/svg/Brinte Icon.svg";
import WoodMark from "@/assets/svg/Wordmark.svg";
import DotImage from "@/assets/svg/dot.svg";
import MotionWrapper from "@/components/custom/motion";
import { footerArray } from "@/utils/constants";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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

  return (
    <footer className="bg-[#DADADB]">
      <MotionWrapper>
        <div className="container__wrapper">
          <div className="child__wrapper">
            <div className="border-[rgba(rgb(218 218 219, 1)] flex w-full flex-col justify-between border-b-[1px] pb-10 md:flex-row">
              <div className="basis-[40%]">
                <Image
                  src={Brinte}
                  alt="brinte footer image"
                  className="h-[50px] w-[50px]"
                />
              </div>
              <div className="basis-[60%]">
                <motion.ul
                  className="basis-[70%] justify-between md:flex md:flex-row"
                  initial="hidden"
                  animate="show"
                  variants={container}
                >
                  {footerArray?.map((link) => {
                    return (
                      <motion.li
                        key={link.id}
                        variants={item}
                        className="pt-10 md:pt-0"
                      >
                        <div>
                          <h4 className="font-bold text-gray-500">
                            {link.title}
                          </h4>
                          <motion.ul className="flex flex-col gap-1 text-sm md:gap-6 md:pt-10">
                            {link.links?.map((item, index) => {
                              return (
                                <Link href="/" key={index}>
                                  <li
                                    className={classNames(
                                      "cursor-pointer pt-3 transition-all duration-500 ease-in-out hover:text-green-600 md:pt-0",
                                      {
                                        "flex items-center gap-4": item?.image,
                                      },
                                    )}
                                  >
                                    {item?.image && (
                                      <Image
                                        src={item?.image}
                                        alt="social media images"
                                        className="h-[20px] w-[20px]"
                                      />
                                    )}
                                    <h4>{item.title}</h4>
                                  </li>
                                </Link>
                              );
                            })}
                          </motion.ul>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </div>
            <motion.ul className="mt-10 flex items-center justify-between text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Image
                  alt="dot image"
                  src={DotImage}
                  className="h-[10px] w-[10px]"
                />
                <p> All systems are operational</p>
              </li>
              <li>&copy; Brinte 2024</li>
            </motion.ul>
          </div>
        </div>
      </MotionWrapper>

      <div className="flex items-center justify-center">
        <Image src={WoodMark} alt="Wood mark image" className="w-[1200px]" />
      </div>
    </footer>
  );
};

export default Footer;
