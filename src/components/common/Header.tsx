import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

import "../../assets/css/styles.css";

interface Props {
  children: React.ReactNode;
  to: string;
  scrolled: boolean;
  isOpen: boolean;
}

const Links = ["About", "Skills", "Projects", "Career", "Contact"];

const styles = {
  navLink: (scrolled: boolean, isOpen: boolean) => ({
    px: 2,
    py: 1,
    rounded: "md",
    cursor: "pointer",
    fontWeight: "bold",
    color: scrolled || isOpen ? "#666" : "#ddd",
    _hover: {
      color: "#DE372A",
      transition: "all 0.5s",
    },
  }),
  portfolioText: (scrolled: boolean, isOpen: boolean) => ({
    fontWeight: "bold",
    color: scrolled || isOpen ? "#666" : "#ddd",
  }),
  iconButton: (scrolled: boolean, isOpen: boolean) => ({
    color: scrolled || isOpen ? "#666" : "#ddd",
    background: "transparent",
    _hover: {
      background: "transparent",
    },
    _active: {
      background: "transparent",
    },
    _focus: {
      boxShadow: "none",
    },
  }),
  dropdown: {
    bg: "#eee",
    color: "#222",
    py: 4,
    px: 4,
    transition: "opacity 0.5s, visibility 0.5s",
    borderBottom: "1px solid gray",
  },
};

const NavLink = ({ children, to, scrolled, isOpen }: Props) => {
  return (
    <Box
      as={Link}
      {...styles.navLink(scrolled, isOpen)}
      onClick={(e) => e.preventDefault()}
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      offset={-72}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        as="header"
        bg={scrolled || isOpen ? "#eee" : "transparent"}
        position="fixed"
        width="100%"
        height="4.5rem"
        borderBottom={scrolled || isOpen ? "1px solid gray" : "none"}
        transition="all 0.5s"
        zIndex="100"
      >
        <Container maxW="container.xl">
          <Flex
            h={"4.5rem"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box {...styles.portfolioText(scrolled, isOpen)}>
              <Link
                to="top"
                smooth="true"
                duration={500}
                style={{ cursor: "pointer" }}
              >
                CHAHYUNWOO's Portfolio
              </Link>
            </Box>
            <HStack spacing={8} alignItems={"center"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
                {...styles.iconButton(scrolled, isOpen)}
              />
              <HStack
                as={"nav"}
                spacing={[5, 5, 5, 10]}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink
                    key={link}
                    to={link.toLowerCase()}
                    scrolled={scrolled}
                    isOpen={isOpen}
                  >
                    {link}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>
        </Container>

        <Box
          {...styles.dropdown}
          sx={{
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
          }}
        >
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link}
                to={link.toLowerCase().replace(/ /g, "-")}
                scrolled={scrolled}
                isOpen={isOpen}
              >
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
