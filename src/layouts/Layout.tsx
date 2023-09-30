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
  decoration?: boolean;
  deletePx?: boolean;
}

export default function Layout({
  backgroundColor,
  backgroundImage,
  height,
  id,
  children,
  flexCenter,
  canvas,
  decoration,
  deletePx,
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
      p={
        height === "100vh"
          ? "5rem 0 0 0"
          : decoration
          ? "calc(5rem + 75px) 0 5rem"
          : "5rem 0"
      }
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
      {decoration && (
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg>
      )}

      {canvas && <Canvas />}
      <Container
        position="relative"
        maxW="container.xl"
        height={canvas ? "auto" : "100%"}
        px={
          deletePx
            ? ["0", "0", "2rem", "1rem"]
            : ["2rem", "2rem", "2rem", "1rem"]
        }
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
