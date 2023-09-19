import { Box, Container } from "@chakra-ui/react";
import Canvas from "../components/common/Canvas";

interface LayoutProps {
  backgroundColor: string;
  id: string;
  children?: React.ReactNode;
  height?: string;
  backgroundImage?: string;
  flexCenter?: boolean;
  canvas?: boolean;
}

export default function Layout({
  backgroundColor,
  backgroundImage,
  height,
  id,
  children,
  flexCenter,
  canvas,
}: LayoutProps) {
  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      height={height}
      backgroundColor={backgroundColor}
      id={id}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      py={"5rem"}
      display={flexCenter ? "flex" : "block"}
      justifyContent={flexCenter ? "center" : undefined}
      alignItems={flexCenter ? "center" : undefined}
      overflow="hidden"
    >
      {canvas && <Canvas />}
      <Container
        position="relative"
        maxW="container.xl"
        px={["2rem", "2rem", "2rem", 0]}
        wordBreak="keep-all"
      >
        {children}
      </Container>
    </Box>
  );
}
