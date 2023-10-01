import SkillStackCard from "./SkillStackCard";
import { Box } from "@chakra-ui/react";

import { CircleAnimation, FlexBox } from "../styles/skillsStyles";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import { useInView } from "react-intersection-observer";
import { FRONTEND, MOBILE, ETC } from "../data/skills";

import { SkillSet, OpenModalDataProps } from "../types/skillsTypes";
import { motion, Variants } from "framer-motion";
import SkillsCardModal from "./SkillsCardModal";

const STACKS = {
  FRONTEND: "frontend",
  MOBILE: "mobile",
  ETC: "etc",
};

type StackType = keyof typeof STACKS;

export default function SkillStackPc() {
  const { animation, animationRef } = useScrollAnimation<HTMLDivElement>();

  const [activeStack, setActiveStack] = useState({
    [STACKS.FRONTEND]: false,
    [STACKS.MOBILE]: false,
    [STACKS.ETC]: false,
  });
  const [modalContents, setModalContents] = useState<OpenModalDataProps | null>(
    null
  );
  const [activeModal, setActiveModal] = useState(false);
  const [lastActiveStack, setLastActiveStack] = useState<StackType>(
    STACKS.FRONTEND as StackType
  );

  const { ref, inView } = useInView({
    threshold: 0.35,
    delay: 500,
    trackVisibility: true,
  });

  const handleOpenStack = (type: StackType) => {
    setActiveStack((prev) => {
      const newActiveStack = { ...prev };

      for (const stackType in newActiveStack) {
        newActiveStack[stackType] = false;
      }

      newActiveStack[type] = true;
      return newActiveStack;
    });
    setLastActiveStack(type);
  };

  const handleModal = (
    isOpen: boolean,
    skills?: OpenModalDataProps,
    stack?: StackType
  ) => {
    if (isOpen && skills && stack) {
      setModalContents({ ...skills, stack });
    } else {
      setModalContents(null);
    }
    setActiveModal(isOpen);
  };

  useEffect(() => {
    if (inView) {
      handleOpenStack(lastActiveStack);
    }
    return () => {
      setActiveStack({
        [STACKS.FRONTEND]: false,
        [STACKS.MOBILE]: false,
        [STACKS.ETC]: false,
      });
    };
  }, [inView]);

  function assertStackType(type: string): asserts type is StackType {
    if (!Object.values(STACKS).includes(type)) {
      throw new Error(`Invalid StackType: ${type}`);
    }
  }

  const skills: SkillSet[] = [
    [STACKS.FRONTEND, FRONTEND, "bg-frontend"],
    [STACKS.MOBILE, MOBILE, "bg-mobile"],
    [STACKS.ETC, ETC, "bg-experienced"],
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <Box
        id="skill-container"
        display={{ base: "none", lg: "flex" }}
        flexDirection="column"
        justifyContent={"center"}
        height="100%"
        as={motion.div}
        ref={animationRef}
        initial="hidden"
        animate={animation}
        variants={fadeIn}
      >
        <FlexBox
          position={"relative"}
          m="auto"
          w="100%"
          minH="850px"
          transition="1.2s"
          activestack={activeStack}
          activemodal={String(activeModal)}
          ref={ref}
        >
          {skills.map((skill, index) => {
            const [type, skillsList] = skill;
            assertStackType(type);

            return (
              <Box
                key={index}
                className={`${type}`}
                position="absolute"
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                transition="1.2s"
              >
                {skillsList.map((el, idx) => (
                  <Box key={el.name}>
                    <CircleAnimation
                      rotation={(360 / skillsList.length) * idx}
                      isRotate={activeStack[type]}
                    >
                      <SkillStackCard
                        value={el.value}
                        open={activeStack[type]}
                      />
                      <Box
                        className={`${el.className}`}
                        position="absolute"
                        left="50%"
                        top="50%"
                        transform="translate(-50%, -50%)"
                        cursor="pointer"
                        onMouseEnter={() => handleModal(true, el, type)}
                        onMouseLeave={() => handleModal(false)}
                      />
                    </CircleAnimation>
                  </Box>
                ))}
                <Box
                  onClick={() => handleOpenStack(type)}
                  bg="white"
                  position="absolute"
                  top="12%"
                  left="12%"
                  zIndex={10}
                  cursor="pointer"
                  borderRadius="50%"
                >
                  <SkillStackCard name={type} value={100} open={false} />
                </Box>
                {modalContents?.stack === type && (
                  <SkillsCardModal modalContents={modalContents} />
                )}
              </Box>
            );
          })}
        </FlexBox>
      </Box>
    </>
  );
}
