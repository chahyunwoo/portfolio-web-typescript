import { Box, Container } from "@chakra-ui/react";
import Canvas from "../components/common/Canvas";
import { responsiveText } from "../styles/responsive";

interface LayoutProps {
  backgroundColor: string;
  id: string;
  children?: React.ReactNode;
  height?: number | string | { base: string; lg: string };
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
      p={height === "100vh" ? "5rem 0 0 0" : "5rem 0"}
      display={flexCenter ? "flex" : "block"}
      justifyContent={flexCenter ? "center" : undefined}
      alignItems={flexCenter ? "center" : undefined}
      overflow="hidden"
      sx={{
        "@media (max-height: 1079px)": {
          height: canvas ? "100vh" : "auto",
        },
      }}
    >
      {canvas && <Canvas />}
      <Container
        position="relative"
        maxW="container.xl"
        height={canvas ? "auto" : "100%"}
        px={["2rem", "2rem", "2rem", "1rem"]}
        wordBreak="keep-all"
        fontSize={responsiveText.ContentsText}
        style={
          canvas
            ? { pointerEvents: "none", position: "relative", top: "-2.25rem" }
            : {}
        }
      >
        {children}
      </Container>
    </Box>
  );
}
