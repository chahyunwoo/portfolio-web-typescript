import { useLayoutEffect, useState } from "react";
import theme from "../styles/theme";

const BREAKPOINTS = {
  MOBILE: parseInt(theme.breakpoints.sm),
};

export default function useMobileCheck() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= BREAKPOINTS.MOBILE
  );

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINTS.MOBILE);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
}
