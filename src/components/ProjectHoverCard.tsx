import { motion } from "framer-motion";
import { Box, Button, Text, List, ListItem } from "@chakra-ui/react";
import { ProjectDataType } from "../types/projectsTypes";
import ProjectsModal from "./ProjectsModal";

interface ProjectHoverCardProps {
  project: ProjectDataType;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const HoverMotionBox = motion(Box);
const HoverMotionTextBox = motion(Box);
const HoverMotionButton = motion(Button);

const BoxVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ProjectHoverCard({
  project,
  isOpen,
  onOpen,
  onClose,
}: ProjectHoverCardProps) {
  return (
    <>
      <HoverMotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="#f5f5f5"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems={"center"}
        py={["20%", "20%", "15%", "15%"]}
        initial="hidden"
        animate="visible"
        variants={BoxVariants}
      >
        <HoverMotionTextBox
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Text
            color="#616161"
            fontSize="lg"
            textAlign={"center"}
            fontWeight="900"
          >
            {project.name}
          </Text>
          <List
            display="flex"
            gap={1}
            color="#616161"
            fontSize="12px"
            justifyContent={"center"}
          >
            {project.skills.map((skill: string, index: number) => (
              <ListItem key={index} textTransform="uppercase" color="#f4623a">
                {index !== 0 && " / "}
                {skill}
              </ListItem>
            ))}
          </List>
        </HoverMotionTextBox>

        <HoverMotionButton
          variant="outline"
          color="#616161"
          borderColor="#616161"
          borderRadius="none"
          borderWidth="2px"
          _hover={{
            borderColor: "#f4623a",
            backgroundColor: "#f4623a",
            color: "white",
          }}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          onClick={onOpen}
        >
          자세히보기
        </HoverMotionButton>
      </HoverMotionBox>

      <ProjectsModal project={project} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
