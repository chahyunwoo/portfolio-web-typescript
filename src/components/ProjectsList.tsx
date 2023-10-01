import { useEffect, useState } from "react";
import { Box, Image, Flex, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ProjectHoverCard from "./ProjectHoverCard";
import { ProjectDataType } from "../types/projectsTypes";

interface ProjectListType {
  projects: ProjectDataType[];
  activeTab: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsList({ projects, activeTab }: ProjectListType) {
  const filteredProjects = projects.filter(
    (project: ProjectDataType) =>
      project.stack === activeTab || activeTab === "all"
  );

  const [height, setHeight] = useState(0);
  const [hoveredId, setHoveredId] = useState("");

  const { animation, animationRef } = useScrollAnimation<HTMLDivElement>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredId(e.currentTarget.id);
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      setHoveredId("");
    }
  };

  const updateHeight = () => {
    let columns, rowHeight;
    const width = window.innerWidth;

    switch (true) {
      case width < 480:
        columns = 1;
        rowHeight = 300;
        break;
      case width < 768:
        columns = 2;
        rowHeight = 240;
        break;
      case width < 992:
        columns = 2;
        rowHeight = 300;
        break;
      default:
        columns = 3;
        rowHeight = 300;
    }

    const rows = Math.ceil(filteredProjects.length / columns);
    const newHeight = rows * rowHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [filteredProjects.length]);

  return (
    <>
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={animation}
        variants={fadeIn}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ height: height }}
            animate={{ height: height }}
            exit={{ height: height }}
            transition={{ duration: 0.5 }}
          >
            <Flex wrap="wrap" justify="center" w="100%" overflow={"hidden"}>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project: ProjectDataType) => (
                  <Box
                    id={project.name}
                    key={project.name}
                    w={{ base: "100%", sm: "50%", md: "50%", lg: "33.33333%" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      layoutId={project.name}
                    >
                      <Box className="project-item" position="relative">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width="100%"
                          height={["300px", "240px", "300px", "300px"]}
                          objectFit={"cover"}
                        />
                        {hoveredId === project.name && (
                          <ProjectHoverCard
                            project={project}
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onClose={onClose}
                          />
                        )}
                      </Box>
                    </motion.div>
                  </Box>
                ))}
              </AnimatePresence>
            </Flex>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
