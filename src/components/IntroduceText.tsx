import { Box } from "@chakra-ui/react";
import { AboutDesc, AboutTitleBorderBottom } from "../styles/aboutStyles";

interface Props {
  titleName: string;
  titleContents: string;
  letterSpacing?: number;
}

export default function IntroduceText({
  titleName,
  titleContents,
  letterSpacing,
}: Props) {
  return (
    <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
      <AboutTitleBorderBottom textAlign={{ base: "center", lg: "left" }}>
        {titleName}
      </AboutTitleBorderBottom>
      <AboutDesc
        textAlign={{ base: "center", lg: "left" }}
        letterSpacing={letterSpacing}
      >
        {titleContents}
      </AboutDesc>
    </Box>
  );
}
