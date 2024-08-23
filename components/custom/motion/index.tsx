"use client";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

const MotionWrapper = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
  });

  return (
    <motion.section
      className={classNames("section__wrapper", className)}
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0.1,
        transform: isInView ? "translateX(-15px)" : "translateX(0px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrapper;
