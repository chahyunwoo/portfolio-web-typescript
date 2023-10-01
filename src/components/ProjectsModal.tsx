import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Box,
  Button,
  Text,
  List,
  ListItem,
  Image,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, LinkIcon } from "@chakra-ui/icons";
import { responsiveText } from "../styles/responsive";
import { ProjectDataType } from "../types/projectsTypes";

interface ProjectsModalType {
  project: ProjectDataType;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsModal({
  project,
  isOpen,
  onClose,
}: ProjectsModalType) {
  return (
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
                  <ListItem key={index} textTransform="uppercase" color="#bbb">
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
  );
}
