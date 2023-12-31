import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProjectsTabProps {
  handleTabChange: (tab: string) => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsTab({ handleTabChange }: ProjectsTabProps) {
  const { animation, animationRef } = useScrollAnimation<HTMLUListElement>();

  return (
    <Tabs
      className="tabs"
      px={["2rem", "2rem", 0, 0]}
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
          onClick={() => handleTabChange("all")}
          _selected={{ color: "#04c2c9", borderBottomColor: "#04c2c9" }}
          fontSize={["sm", "md", "md", "md"]}
        >
          All
        </Tab>
        <Tab
          onClick={() => handleTabChange("bussiness")}
          _selected={{ color: "#04c2c9", borderBottomColor: "#04c2c9" }}
          fontSize={["sm", "md", "md", "md"]}
        >
          Business
        </Tab>
        <Tab
          onClick={() => handleTabChange("personal")}
          _selected={{ color: "#04c2c9", borderBottomColor: "#04c2c9" }}
          fontSize={["sm", "md", "md", "md"]}
        >
          Personal
        </Tab>
      </TabList>
    </Tabs>
  );
}
