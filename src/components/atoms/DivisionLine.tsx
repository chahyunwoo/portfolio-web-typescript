import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  direction: "left" | "right";
  isMobile: boolean;
  isWhiteColor?: boolean;
}

const slideInDelay = (direction: "left" | "right") => ({
  hidden: { x: direction === "left" ? "-100%" : "100%", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
});

export default function DivisionLine({
  direction,
  isMobile,
  isWhiteColor,
}: Props) {
  return (
    <Box
      as={motion.span}
      display="inline-block"
      initial={isMobile ? "visible" : "hidden"}
      whileInView={isMobile ? "visible" : "visible"}
      viewport={{ once: true, amount: 0.8 }}
      variants={slideInDelay(direction)}
      borderWidth="2px"
      borderColor={isWhiteColor ? "#f2f2f2" : "#444649"}
      width="2.5em"
    />
  );
}
