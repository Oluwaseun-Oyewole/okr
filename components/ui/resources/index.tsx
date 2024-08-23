"use client";
import MotionWrapper from "@/components/custom/motion";
import { resources } from "@/utils/constants";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const HelpfulResources = () => {
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
    hidden: { opacity: 0, transform: "translateX(-100px)" },
    show: { opacity: 1, transform: "translateX(0px)" },
  };

  return (
    <section className="bg-[#F2F2F3]">
      <MotionWrapper>
        <div className="container__wrapper">
          <div className="child__wrapper">
            <div className="sub__wrapper">
              <div className="md:w-[60%]">
                <h1 className="heading__text">Helpful</h1>
                <h1 className="heading__text">resources</h1>
                <p className="sub__text">
                  Find helpful tools and materials from our community, help
                  center and docs
                </p>
              </div>
              <div className="pt-10 md:pt-16">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={container}
                  className="gridContainer link__wrapper h-[390px]"
                >
                  {resources?.map((resource) => {
                    return (
                      <motion.li
                        variants={item}
                        key={resource.id}
                        className={classNames(
                          resource.className,
                          "flex h-[200px] flex-col justify-between rounded-3xl px-6 py-6 transition-all duration-500 ease-in-out hover:opacity-60 md:h-full",
                        )}
                        style={{ background: resource.color }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={resource.imagePath}
                              alt={resource?.title}
                              className="h-[20px] w-[20px]"
                            />
                            <h3 className=""> {resource.title}</h3>
                          </div>
                          <Link href={resource.link}>
                            <GoArrowUpRight size={20} />
                          </Link>
                        </div>
                        <h3>{resource.heading}</h3>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default HelpfulResources;
