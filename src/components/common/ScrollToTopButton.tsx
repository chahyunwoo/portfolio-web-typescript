import { Link } from "react-scroll";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton, Box } from "@chakra-ui/react";

interface Props {
  scrollPos: number;
}

export default function ScrollToTopButton({ scrollPos }: Props) {
  const isScrolled = scrollPos > 10;

  return (
    <Box
      opacity={isScrolled ? 1 : 0}
      sx={{ visibility: isScrolled ? "visible" : "hidden" }}
      transition="opacity 0.5s ease-in-out, visibility 0.5s ease-in-out"
    >
      <Link to="top" smooth={true} duration={500}>
        <IconButton
          aria-label="Scroll to top"
          icon={<ArrowUpIcon />}
          size="lg"
          variant="outline"
          border="2px solid"
          position="fixed"
          bottom="4"
          right="4"
          zIndex="99999"
          sx={{
            mixBlendMode: "difference",
            color: "#fff",
            _hover: {
              bgColor: "transparent",
              borderColor: "currentcolor",
            },
          }}
        />
      </Link>
    </Box>
  );
}
