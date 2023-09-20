import styled from "@emotion/styled";
import { Box, Flex } from "@chakra-ui/react";

import { ReactNode, SVGProps } from "react";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import useMobileCheck from "../../hooks/useMobileCheck";

interface Props {
  icon: React.ReactElement<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  delay: number;
}

const Hexagon = styled(Box)`
  width: 120px;
  height: 105px;
  background: #04c2c9;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90px;
    height: 78.75px;
  }

  svg {
    width: 60px;
    height: 60px;
    color: #fff;

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }
`;

const spinIn = (delay: number) => ({
  hidden: { opacity: 0, rotateY: 270 },
  visible: {
    opacity: 1,
    rotateY: 360,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function AboutCard({ icon, children, delay }: Props) {
  const { animation, ref } = useScrollAnimation();
  const isMobile = useMobileCheck();

  return (
    <Flex wrap="wrap" justifyContent={"center"} textAlign="center">
      <Hexagon
        as={motion.div}
        ref={ref}
        initial={isMobile ? "visible" : "hidden"}
        animate={isMobile ? "visible" : animation}
        variants={spinIn(delay)}
      >
        {icon}
      </Hexagon>
      {children}
    </Flex>
  );
}
