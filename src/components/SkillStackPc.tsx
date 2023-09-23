import SkillStackCard from "./SkillStackCard";
import { Box } from "@chakra-ui/react";

import { Card, CircleAnimation, FlexBox } from "../styles/skillsStyles";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import { useInView } from "react-intersection-observer";
import { FRONTEND, MOBILE, ETC } from "../data/skills";

import { SkillSet, OpenModalDataProps } from "../types/skillsTypes";
import { motion, Variants } from "framer-motion";

export default function SkillStackPc() {
  const { animation, animationRef } = useScrollAnimation();

  const [activeStack, setActiveStack] = useState({
    frontend: false,
    mobile: false,
    etc: false,
  });
  const [modalContents, setModalContents] = useState({
    stack: "",
    name: "",
    content: "",
  });
  const [activeModal, setActiveModal] = useState(false);
  const [lastActiveStack, setLastActiveStack] = useState("frontend");

  const handleOpenStack = (type: string) => {
    setActiveStack((prev) => ({
      frontend: type === "frontend" ? !prev.frontend : false,
      mobile: type === "mobile" ? !prev.mobile : false,
      etc: type === "etc" ? !prev.etc : false,
    }));
    setLastActiveStack(type);
  };

  const handleModal = (
    isOpen: boolean,
    skills?: OpenModalDataProps,
    stack?: string
  ) => {
    if (isOpen && skills && stack) {
      setModalContents({ stack, name: skills.name, content: skills.content });
    }
    setActiveModal(isOpen);
  };

  const { ref, inView } = useInView({
    threshold: 0.35,
    delay: 500,
    trackVisibility: true,
  });

  useEffect(() => {
    if (inView) {
      handleOpenStack(lastActiveStack);
    }
    return () => {
      setActiveStack({
        frontend: false,
        mobile: false,
        etc: false,
      });
    };
  }, [inView]);

  const skills: SkillSet[] = [
    ["frontend", FRONTEND, "bg-frontend"],
    ["mobile", MOBILE, "bg-mobile"],
    ["etc", ETC, "bg-experienced"],
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <Box
        className="skill-container"
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
          activeStack={activeStack}
          activeModal={activeModal}
          ref={ref}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              className={`${skill[0]}`}
              position="absolute"
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              transition="1.2s"
            >
              {skill[1].map((el, idx) => (
                <Box key={el.name}>
                  <CircleAnimation
                    rotation={(360 / skill[1].length) * idx}
                    isRotate={
                      skill[0] === "frontend"
                        ? activeStack.frontend
                        : skill[0] === "mobile"
                        ? activeStack.mobile
                        : activeStack.etc
                    }
                  >
                    <SkillStackCard
                      value={el.value}
                      open={
                        skill[0] === "frontend"
                          ? activeStack.frontend
                          : skill[0] === "mobile"
                          ? activeStack.mobile
                          : activeStack.etc
                      }
                    />
                    <Box
                      className={`${el.className} skills`}
                      onMouseEnter={() => handleModal(true, el, skill[0])}
                      onMouseLeave={() => handleModal(false)}
                    />
                  </CircleAnimation>
                </Box>
              ))}
              <Box
                onClick={() => handleOpenStack(skill[0])}
                className="stack-circle"
              >
                <SkillStackCard name={skill[0]} value={100} open={false} />
              </Box>
              {modalContents.stack === skill[0] && (
                <Card className="modal">
                  <Box className="modal-name">{modalContents.name}</Box>
                  <Box className="modal-content">{modalContents.content}</Box>
                </Card>
              )}
            </Box>
          ))}
        </FlexBox>
      </Box>
    </>
  );
}
