import { Heading, VStack } from "@chakra-ui/react";
import DivisionLine from "./DivisionLine";
import { motion } from "framer-motion";
import { responsiveText } from "../../styles/responsive";
import useMobileCheck from "../../hooks/useMobileCheck";

interface Props {
  children: React.ReactNode;
  direction: "left" | "right";
  absolute?: boolean;
}

const slideIn = (direction: "left" | "right") => ({
  hidden: { x: direction === "left" ? "-20%" : "20%", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

export default function SectionTitle({ children, direction, absolute }: Props) {
  const isMobile = useMobileCheck();

  return (
    <VStack
      gap={0}
      fontSize={responsiveText.Heading}
      sx={{
        position: { base: "initial", lg: absolute ? "absolute" : "initial" },
        top: { base: "unset", lg: absolute ? "0" : "unset" },
        left: { base: "unset", lg: absolute ? "50%" : "unset" },
        transform: {
          base: "unset",
          lg: absolute ? "translate(-50%, 0%)" : "unset",
        },
        "@media (max-height: 1079px)": {
          position: "initial",
          top: "unset",
          left: "unset",
          transform: "unset",
        },
      }}
    >
      <Heading
        as={motion.h1}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.8 }}
        variants={slideIn(direction)}
        color={"#444649"}
        textAlign={"center"}
        marginBottom="0.2em"
        letterSpacing={-0.5}
        fontWeight="900"
      >
        {children}
      </Heading>
      <DivisionLine direction={direction} isMobile={isMobile} />
    </VStack>
  );
}
