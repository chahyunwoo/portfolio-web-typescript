import { Box } from "@chakra-ui/react";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className: string;
}

const slideIn = (direction: string) => ({
  hidden: { opacity: 0, x: direction === "left" ? "-20%" : "20%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
});

export default function AboutLayout({ children, className }: Props) {
  const { animation, animationRef } = useScrollAnimation();

  return (
    <Box
      className={`about-${className}`}
      as={motion.div}
      ref={animationRef}
      initial="hidden"
      animate={animation}
      variants={slideIn(className)}
    >
      {children}
    </Box>
  );
}
