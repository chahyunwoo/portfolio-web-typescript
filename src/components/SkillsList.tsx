import { useEffect, useState } from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { responsiveText } from "../styles/responsive";
import { SkillDataType } from "../types/skillsTypes";

interface SkillsListType {
  skills: SkillDataType[];
  activeTab: string;
}

const MotionText = motion(Text);

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsList({ skills, activeTab }: SkillsListType) {
  const filteredSkills = skills.filter(
    (skill: SkillDataType) => skill.stack === activeTab
  );

  const [height, setHeight] = useState(0);

  const updateHeight = () => {
    const rows = Math.ceil(filteredSkills.length);
    const newHeight = rows * 46 - 16;
    setHeight(newHeight);
  };

  useEffect(() => {
    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [filteredSkills.length]);

  const { animation, animationRef } = useScrollAnimation<HTMLDivElement>();

  return (
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
          <List spacing={4} overflow="hidden">
            <AnimatePresence key={activeTab} mode="popLayout">
              {filteredSkills.map((skill: SkillDataType, index: number) => {
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    layoutId={skill.name}
                  >
                    <ListItem>
                      <Flex align={"center"} height="30px">
                        <Box
                          w="30%"
                          bg="#04c2c9"
                          h="100%"
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          color="#fff"
                          fontWeight={"bold"}
                          overflow="hidden"
                          textOverflow={"ellipsis"}
                          whiteSpace="nowrap"
                        >
                          <Text isTruncated>{skill.name}</Text>
                        </Box>
                        <Box
                          flex="1"
                          position={"relative"}
                          bg="#e9e9e9"
                          borderRadius={"4px"}
                          h="100%"
                          width="70%"
                        >
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${skill.value}%` }}
                            transition={{ duration: 1 }}
                            style={{
                              backgroundColor: "#00a1a7",
                              height: "100%",
                              position: "relative",
                            }}
                          >
                            <MotionText
                              position={"absolute"}
                              right="0"
                              color="#fff"
                              top="50%"
                              transform={"translate(-50%, -50%)"}
                              fontSize={responsiveText.ContentsText}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.05 * index + 0.5,
                              }}
                            >
                              {skill.value}%
                            </MotionText>
                          </motion.div>
                        </Box>
                      </Flex>
                    </ListItem>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </List>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
