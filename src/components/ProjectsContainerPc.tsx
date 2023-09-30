import { useEffect, useState, useRef, useMemo } from "react";
import {
  ProjectsContainer,
  Drag,
  Spin,
  Ground,
} from "../styles/projectContainerPcStyles";

import { PROJECTS } from "../data/projects";
import ProjectsCardPc from "./ProjectsCardPc";
import useHandleResize from "../hooks/useHandleResize";
import useHandlePointer from "../hooks/useHandlePointer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import useCombinedRefs from "../hooks/useCombinedRefs";

import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

interface ProjectDataType {
  stack: string;
  name: string;
  className: string;
  image: any;
  skills: string[];
  description: string;
  url: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeOut = {
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function ProjectsContainerPc() {
  const [transforms, setTransforms] = useState<string[]>([]);
  const [transitionDelays, setTransitionDelays] = useState<number[]>([]);
  const [click, setClick] = useState(false);
  const [fadeInComplete, setFadeInComplete] = useState(false);

  const { resizing, imgBoxWidth, imgBoxHeight, radius } = useHandleResize();
  const {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    tX,
    tY,
    isRunning,
    dragDirection,
  } = useHandlePointer(click);
  const { animation, animationRef } = useScrollAnimation();

  const rotateSpeed = -60;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const spinRef = useRef<HTMLDivElement | null>(null);
  const groundRef = useRef<HTMLDivElement | null>(null);
  const combinedRef = useCombinedRefs(spinRef, animationRef);

  useEffect(() => {
    if (spinRef.current) {
      spinRef.current.style.width = `${imgBoxWidth}px`;
      spinRef.current.style.height = `${imgBoxHeight}px`;
    }

    if (groundRef.current) {
      groundRef.current.style.width = `${radius * 3}px`;
      groundRef.current.style.height = `${radius * 3}px`;
    }
  }, [imgBoxWidth, imgBoxHeight, radius]);

  useEffect(() => {
    if (click) {
      const updatedTransforms = PROJECTS.map(
        (_, index) =>
          `rotateY(${
            index * (360 / PROJECTS.length)
          }deg) translateZ(${radius}px)`
      );
      setTransforms(updatedTransforms);
    }
  }, [radius, PROJECTS, click]);

  const newTransitionDelays = useMemo(() => {
    return PROJECTS.map((_, index) => (PROJECTS.length - index) / 4);
  }, [radius, PROJECTS]);

  const handleClick = () => {
    if (!click) {
      setClick(true);
      setTransforms(transforms);
      setTransitionDelays(newTransitionDelays);
    }
  };

  const handleFadeInComplete = () => {
    setFadeInComplete(true);
  };

  // 모달 관련 부분 TODO: 컴포넌트 분리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataType | null>(null);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProjectsContainer
        as="div"
        ref={containerRef}
        draggable={true}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <Drag ref={dragRef} tX={tX} tY={tY} imgBoxHeight={imgBoxHeight}>
          <Spin
            ref={combinedRef}
            rotatespeed={rotateSpeed}
            $running={isRunning}
            $click={click}
            dragDirection={dragDirection}
            as={motion.div}
            initial="hidden"
            animate={animation}
            variants={fadeIn}
            onAnimationComplete={handleFadeInComplete}
          >
            {PROJECTS.map((project, index) => {
              return (
                <ProjectsCardPc
                  key={index}
                  image={project.image}
                  transform={transforms[index]}
                  transitiondelay={transitionDelays[index]}
                  $click
                  $resizing={resizing}
                  onCardClick={() => handleCardClick(project)}
                />
              );
            })}
            <AnimatePresence>
              {!click && (
                <Box
                  as={motion.div}
                  initial="visible"
                  exit="exit"
                  variants={fadeOut}
                  zIndex={99}
                >
                  <Box
                    color="white"
                    position="absolute"
                    width="100%"
                    height="100%"
                    top={0}
                    left={0}
                    backgroundColor="rgba(0, 0, 0, 0.8)"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    cursor="pointer"
                  >
                    <Button
                      variant="solid"
                      width="50%"
                      backgroundColor="#f4623a"
                      color="#eee"
                      border="none"
                      _hover={{ bg: "#DE372A" }}
                      p={4}
                      onClick={handleClick}
                    >
                      Click Me !
                    </Button>
                  </Box>
                  <Box
                    color="white"
                    position="absolute"
                    bottom={`calc(-20% - ${imgBoxHeight}px)`}
                    left={"50%"}
                    transform="translate(-50%, -50%)"
                    width="100vw"
                    textAlign="center"
                    fontSize={"16px"}
                  >
                    {fadeInComplete && (
                      <TypeAnimation
                        style={{ whiteSpace: "pre-line" }}
                        sequence={[
                          "버튼을 클릭하면 제 프로젝트들을 확인하실 수 있습니다.\n드래그에 따라 카드의 시야 각도를 바꾸거나 회전시킬 수 있습니다.",
                          1000,
                        ]}
                        wrapper="span"
                      />
                    )}
                  </Box>
                </Box>
              )}
            </AnimatePresence>
          </Spin>

          <Ground ref={groundRef}></Ground>
        </Drag>
      </ProjectsContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        {selectedProject && (
          <ModalContent>
            <ModalHeader>{selectedProject.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>{selectedProject.description}</p>
              {/* ... other project info ... */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModal}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
}
