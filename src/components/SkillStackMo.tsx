import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FRONTEND, MOBILE, ETC } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { responsiveText } from "../styles/responsive";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const barVariants = (i: number) => ({
  hidden: { y: 50, opacity: 0, height: 0 },
  visible: {
    y: 0,
    opacity: 1,
    height: "30px",
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    height: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  },
});

const tabKeys = ["FRONTEND", "MOBILE", "ETC"];
const tabSkills = [FRONTEND, MOBILE, ETC];

export default function SkillStackMo() {
  const [tabIndex, setTabIndex] = useState(0);
  const [fadeInComplete, setFadeInComplete] = useState(false);
  const [gaugeComplete, setGaugeComplete] = useState(false);

  const [disableTabs, setDisableTabs] = useState(true);

  const { animation, animationRef } = useScrollAnimation();

  const handleFadeInComplete = () => {
    setFadeInComplete(true);
  };

  const handleGaugeComplete = () => {
    setGaugeComplete(true);
  };

  const handleTabsChange = (index: number) => {
    if (disableTabs) {
      return;
    }
    setTabIndex(index);
    setDisableTabs(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableTabs(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [disableTabs]);

  const renderSkills = (skills: any, delayMultiplier: number) => {
    return skills.map((skill: any, index: number) => (
      <MotionFlex
        direction="row"
        mb={4}
        key={skill.name}
        align="center"
        height="30px"
        variants={barVariants(index)}
        initial="hidden"
        animate={fadeInComplete ? "visible" : "hidden"}
        exit="exit"
        custom={index}
        onAnimationComplete={handleGaugeComplete}
      >
        <Box
          width="30%"
          bg="#04c2c9"
          h={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          color="#fff"
          fontWeight={"bold"}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          <Text isTruncated>{skill.name}</Text>
        </Box>
        <Box
          className="skill-bar"
          flex="1"
          position="relative"
          bg="#e9e9e9"
          borderRadius="4px"
          h="100%"
          width="70%"
        >
          <motion.div
            key={tabIndex}
            initial={{ width: "0%" }}
            animate={fadeInComplete ? { width: `${skill.value}%` } : ""}
            transition={{
              delay: delayMultiplier * index * 0.1,
              duration: 1,
            }}
            style={{
              backgroundColor: "#00A1A7",
              height: "100%",
              position: "relative",
            }}
            onAnimationComplete={handleGaugeComplete}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={gaugeComplete ? { opacity: 1 } : ""}
              transition={{
                delay: delayMultiplier * index * 0.1 + 1,
                duration: 1,
              }}
            >
              <Text
                position="absolute"
                right="0"
                color="#fff"
                top="50%"
                transform="translate(-50%, -50%)"
                fontSize={responsiveText.ContentsText}
              >
                {skill.value}%
              </Text>
            </motion.div>
          </motion.div>
        </Box>
      </MotionFlex>
    ));
  };

  return (
    <MotionBox
      marginTop="4em"
      ref={animationRef}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      onAnimationComplete={handleFadeInComplete}
      display={{ base: "block", lg: "none" }}
      id="skill-container-mo"
    >
      <Tabs
        variant="enclosed"
        isFitted
        onChange={handleTabsChange}
        isLazy={true}
      >
        <TabList marginBottom={8}>
          {tabKeys.map((tabkey, id) => (
            <Tab
              key={id}
              isDisabled={disableTabs && tabIndex !== id}
              _selected={{ color: "#04c2c9" }}
              color="#616161"
              fontSize={["sm", "md", "md", "md"]}
            >
              {tabkey}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabSkills.map((skills, id) => (
            <TabPanel key={id} as={AnimatePresence} mode="popLayout">
              {renderSkills(skills, id + 1)}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </MotionBox>
  );
}
