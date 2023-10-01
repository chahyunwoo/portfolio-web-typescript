import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface SkillsTabProps {
  handleTabChange: (tab: string) => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsTab({ handleTabChange }: SkillsTabProps) {
  const { animation, animationRef } = useScrollAnimation<HTMLUListElement>();

  return (
    <Tabs
      className="tabs"
      m="4em 0 2em 0"
      isFitted
      as={motion.ul}
      ref={animationRef}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
    >
      <TabList color="#616161">
        <Tab
          onClick={() => handleTabChange("frontend")}
          _selected={{ color: "#04c2c9", borderBottomColor: "#04c2c9" }}
          fontSize={["sm", "md", "md", "md"]}
        >
          Frontend
        </Tab>
        <Tab
          onClick={() => handleTabChange("mobile")}
          _selected={{ color: "#04c2c9", borderBottomColor: "#04c2c9" }}
          fontSize={["sm", "md", "md", "md"]}
        >
          Mobile
        </Tab>
        <Tab
          onClick={() => handleTabChange("etc")}
          _selected={{ color: "#04c2c9", borderBottomColor: "#04c2c9" }}
          fontSize={["sm", "md", "md", "md"]}
        >
          ETC
        </Tab>
      </TabList>
    </Tabs>
  );
}
