import { useEffect, useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectList({ projects, activeTab }: any) {
  const filteredProjects = projects.filter(
    (project: any) => project.stack === activeTab || activeTab === "all"
  );

  const [height, setHeight] = useState(0);

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
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ height: height }}
        animate={{ height: height }}
        exit={{ height: height }}
        transition={{ duration: 0.5 }}
      >
        <Flex wrap="wrap" justify="center" w="100%">
          {filteredProjects.map((project: any, index: any) => (
            <Box
              key={project.name}
              w={{ base: "100%", sm: "50%", md: "50%", lg: "33.33333%" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                layoutId={project.name}
              >
                <Box className="project-item">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width="100%"
                    height={["300px", "240px", "300px", "300px"]}
                    objectFit={"cover"}
                  />
                </Box>
              </motion.div>
            </Box>
          ))}
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectList;
