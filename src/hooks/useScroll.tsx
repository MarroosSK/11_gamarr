import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  const onScrolling = () => {
    if (window.scrollY > 45) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    onScrolling();

    window.addEventListener("scroll", onScrolling);

    return () => window.removeEventListener("scroll", onScrolling);
  }, []);

  return { scrolled };
};
