import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { responsiveText } from "../styles/responsive";
import { AboutTitle, AboutDesc } from "../styles/aboutStyles";
import styled from "@emotion/styled";

const ResponsiveAboutDesc = styled(AboutDesc)`
  white-space: unset;

  @media (min-width: 768px) {
    white-space: pre-line;
  }
`;

interface Props {
  title: string;
  desc: string;
  delay: number;
}

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: delay } },
});

export default function CardContents({ title, desc, delay }: Props) {
  const { animation, animationRef } = useScrollAnimation<HTMLDivElement>();

  return (
    <motion.div
      ref={animationRef}
      initial="hidden"
      animate={animation}
      variants={fadeIn(delay)}
      style={{ width: "100%" }}
    >
      <AboutTitle as="p" fontSize={responsiveText.Text}>
        {title}
      </AboutTitle>
      <ResponsiveAboutDesc>{desc}</ResponsiveAboutDesc>
    </motion.div>
  );
}
