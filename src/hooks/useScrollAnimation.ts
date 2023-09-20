// hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

import throttle from "lodash/throttle";

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [animationState, setAnimationState] = useState<string>("hidden");

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const offset =
          (window.innerHeight || document.documentElement.clientHeight) * 0.8;
        if (
          rect.top <= offset &&
          rect.bottom >= 0 &&
          animationState !== "visible"
        ) {
          controls.start("visible");
          setAnimationState("visible");
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, animationState]);

  return { animation: controls, ref };
};
