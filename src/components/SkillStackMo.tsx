import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { FRONTEND, MOBILE, ETC } from "../data/skills";
import SkillsList from "./SkillsList";
import SkillsTab from "./SkillsTab";

export default function SkillStackMo() {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredSkills = [...FRONTEND, ...MOBILE, ...ETC];

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <SkillsTab handleTabChange={handleTabChange} />
      <SkillsList skills={filteredSkills} activeTab={activeTab} />
    </Box>
  );
}
