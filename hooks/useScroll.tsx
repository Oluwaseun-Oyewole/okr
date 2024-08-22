import { useEffect, useState } from "react";

export const useScroll = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [_, setScrollY] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolledPast(currentScrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolledPast };
};
