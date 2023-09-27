import { useState } from "react";
import { ImageBox } from "../styles/projectContainerPcStyles";
import { Box, Text } from "@chakra-ui/react";

interface ProjectCardPcProps {
  key: number;
  image: any;
  transform: any;
  transitiondelay: any;
  $click: boolean;
  $resizing: boolean;
  onCardClick: any;
}

export default function ProjectsCardPc({
  key,
  image,
  transform,
  transitiondelay,
  $click,
  $resizing,
  onCardClick,
}: ProjectCardPcProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ImageBox
      key={key}
      image={image}
      transform={transform}
      transitiondelay={transitiondelay}
      $click={$click}
      $resizing={$resizing}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCardClick}
    >
      {isHovered && (
        <Box
          w="full"
          h="full"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          bg="rgba(0, 0, 0, 0.5)"
          as="button"
        >
          <Text
            bg="#f4623a"
            fontSize="1vw"
            borderRadius={"4px"}
            color="#eee"
            p={2}
            fontWeight="bold"
            _hover={{ bg: "#de372a" }}
            transition="0.5s"
          >
            자세히 보기
          </Text>
        </Box>
      )}
    </ImageBox>
  );
}
