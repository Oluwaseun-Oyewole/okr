import { useEffect, useState } from "react";

export const useScroll = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (scrollY > 80) {
        setIsScrolledPast(true);
      } else {
        setIsScrolledPast(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return { isScrolledPast };
};
