import { motion } from "framer-motion";
import {
  Box,
  Button,
  Text,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, LinkIcon } from "@chakra-ui/icons";
import { responsiveText } from "../styles/responsive";
import { ProjectDataType } from "../types/projectsTypes";

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

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={["xs", "sm", "md", "lg"]}
      >
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalBody p={0}>
            <Box mb={4}>
              <Image src={project.image} />
            </Box>
            <Box px={"1.5rem"}>
              <Box mb={4} pb={4} borderBottom="1px solid #ddd">
                <Text
                  as="h1"
                  fontSize={responsiveText.Heading}
                  textTransform="uppercase"
                  fontWeight={"900"}
                  color="#616161"
                  marginBottom={-2}
                >
                  {project.name}
                </Text>
                <List display="flex">
                  {project.skills.map((skill: string, index: number) => (
                    <ListItem
                      key={index}
                      textTransform="uppercase"
                      color="#bbb"
                    >
                      {index !== 0 && " / "}
                      {skill}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box mb={4}>
                <Text
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  whiteSpace={"pre-wrap"}
                >
                  {project.description}
                </Text>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent={"space-between"}>
            <Button
              onClick={onClose}
              as={Link}
              href={project.url}
              isExternal
              bg="#f4623a"
              color="white"
              borderColor="#f4623a"
              borderRadius="none"
              borderWidth="2px"
              transition="all 0.35s"
              leftIcon={<LinkIcon />}
              alignItems="center"
              _hover={{
                borderColor: "transparent",
                textDecoration: "none",
                backgroundColor: "transparent",
                color: "#f4623a",
              }}
            >
              VIEW SITE
            </Button>
            <Button
              bg="transparent"
              onClick={onClose}
              _hover={{ bg: "transparent" }}
              rightIcon={<CloseIcon />}
              color="#aaa"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
